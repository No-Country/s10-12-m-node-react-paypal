const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const transactionServices = require('../services/transaction.services');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();
const UserServices = require('../services/user.services');
const userServices = new UserServices();

const createTransaction = catchAsync(async (req, res, next) => {
    const { id: userId } = req.params;
    const { nickName, amount } = req.body;
    const { account_number, receiverId } = req.body;

    const accountSender = await accountServices.findOneAccount({
        attributes: { userId },
        next,
    });

    let attributes;
    if (nickName) {
        const receiverUser = await userServices.findOneUser({
            attributes: { nickName },
            next,
        });
        if (!receiverUser)
            throw next(
                new AppError(`User with nickname ${nickName} not exist`, 404),
            );
        attributes = { nickName };
    }
    if (account_number) {
        attributes = { account_number: account_number.toString() };
    }

    const accountReceiver = await accountServices.findOneAccount({
        attributes,
        next,
    });

    if (!accountReceiver) {
        throw next(new AppError('reciever account not exist', 404));
    }
    if (accountReceiver.userId == 1 || receiverId == 1) {
        throw next(new AppError('Receivier user not valid', 401));
    }

    if (!accountSender) {
        throw next(new AppError('sender account not exist'), 404);
    }
    //verifico los fondos del senderId
    if (accountSender.balance < amount) {
        throw next(new AppError('not enought money', 400));
    }
    // hago la transaccion y guardo.
    accountSender.balance -= amount;
    accountReceiver.balance += amount;
    accountSender.save();
    accountReceiver.save();
    const { TransactionDetail, receivingUser } =
        await transactionServices.transfer({
            senderId: userId,
            receivingId: accountReceiver.userId,
            AccountId: accountSender.id,
            amount,
            method: 'transfer',
        });

    res.status(200).json({
        status: 'success',
        message: 'The transaction has been done',
        TransactionDetail,
        receivingUser,
    });
});

const chargePointCharge = catchAsync(async (req, res, next) => {
    const userId = +req.params.id;
    const { amount } = req.body;
    console.log(userId, amount);

    const data = await accountServices.chargeAccountChargePoint({
        userId,
        amount,
    });
    //console.log(data)
    res.status(200).json({
        status: 'success',
        message: 'The account has been charged',
    });
});

const getTransactions = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const listTransactions = await transactionServices.getTransactions({
        id,
        next,
    });

    res.status(200).json({
        status: 'success',
        message: 'The account has been charged',
        listTransactions,
    });
});

module.exports = {
    createTransaction,
    chargePointCharge,
    getTransactions,
};
