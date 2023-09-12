const catchAsync = require('../helpers/catchAsync');
const emailConfirmation = require('../middlewares/emailConfirmation');
const generateConfirmLink = require('../utils/generateConfirmLink');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();

exports.createAccount = catchAsync(async (req, res) => {
    const userId = req.params.id;

    const userHasAccount = await accountServices.hasAccount(userId);
    if (userHasAccount) {
        return res.status(400).json({
            status: 'fail',
            message: 'User already has an account.',
        });
    }

    const createdAccount = await accountServices.createAccount(userId);

    const confirmLink = generateConfirmLink(createdAccount.id);

    const { sessionUser } = req;
    const confirmation = await emailConfirmation(
        sessionUser.email,
        confirmLink,
    );

    res.status(200).json({
        status: 'success',
        message: 'Account created and saved to database',
        account: createdAccount,
    });
});

exports.rechargeCard = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    const charge = await accountServices.rechargeAccount({ body, id, next });

    res.status(200).json({
        status: 'success',
        message: 'You have recharged your account',
        charge,
    });
});

exports.confirmAccount = catchAsync(async (req, res) => {
    const token = req.params.token;
    const result = await accountServices.confirmAccount(token, 'confirmed');

    if (result === 'confirmed') {
        return res.status(200).json({
            status: 'success',
            message: 'Account successfully confirmed',
            account: result,
        });
    } else {
        return res.status(400).json({
            status: 'error',
            message: 'Error confirming account. Please contact support.',
        });
    }
});
