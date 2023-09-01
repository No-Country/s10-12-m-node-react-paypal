const catchAsync = require('../helpers/catchAsync');
const UserServices = require('../services/user.services');
const userServices = new UserServices();

exports.createUser = catchAsync(async (req, res, next) => {
    const body = req.body;
    console.log(body)
    //body.id = uuidv4();
    console.log("2")
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
