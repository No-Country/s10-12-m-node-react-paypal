const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const UserServices = require('../services/user.services');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const userServices = new UserServices();

exports.protectRoute = catchAsync(async (req, res, next) => {
    let token;
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new AppError('You must log in to access', 401));
    }
    const { id } = await promisify(jwt.verify)(
        token,
        process.env.SECRET_JWT_SEED,
    );
    const user = await userServices.findOneUser({
        attributes: { id },
        next,
    });
    if (!user) {
        return next(new AppError('This user is not available', 401));
    }
    req.sessionUser = user;
    next();
});

exports.verifyAccountOwner = catchAsync(async (req, res, next) => {
    const { sessionUser } = req;
    const { id } = req.params;
    if (id != sessionUser.id) {
        return next(new AppError('You do not own this account.', 401));
    }

    next();
});
