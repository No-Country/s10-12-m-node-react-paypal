const AppError = require('../helpers/AppError');
const catchAsync = require('../helpers/catchAsync');
const UserServices = require('../services/user.services');
const userServices = new UserServices();

exports.createUser = catchAsync(async (req, res, next) => {
    const body = req.body;
    const { newUser, token } = await userServices.createUser({ body, next });
    res.status(200).json({
        status: 'success',
        message: 'The user has been created',
        newUser,
        token,
    });
});

exports.login = catchAsync(async (req, res, next) => {
    //1. traernos la informacion de la req.body
    const { email, password } = req.body;
    const { user, token } = await userServices.login({
        email,
        password,
        next,
    });
    res.status(200).json({
        status: 'success',
        token,
        user,
    });
});

exports.updateUserInfo = catchAsync(async (req, res, next) => {
    const { body, sessionUser } = req;
    const user = await userServices.updateUser({ body, sessionUser, next });

    res.status(200).json({
        status: 'success',
        user,
    });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
    const { sessionUser } = req;
    await userServices.deleteUser({ sessionUser });

    res.status(200).json({
        status: 'success',
    });
});

exports.changePassword = catchAsync(async (req, res, next) => {
    const { sessionUser, body } = req;
    const user = await userServices.changePassword({ sessionUser, body, next });

    res.status(200).json({
        status: 'success',
        user,
    });
});

exports.getUser = catchAsync(async (req, res, next) => {
    const { nickname } = req.params;
    const attributes = { nickName: nickname };
    const user = await userServices.findOneUser({ attributes, next });

    if (!user) {
        return new AppError(`user with nickame ${nickname} not found`, 404);
    }

    res.status(200).json({
        status: 'success',
        user,
    });
});
