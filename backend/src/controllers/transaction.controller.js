const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const transactionServices = require('../services/transaction.services');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();

const createTransaction = catchAsync(async (req, res, next) => {
    const { senderId, receivingData, amount } = req.body;
    //verifico los fondos del senderId
    let attributes = { userId: senderId };

    accountSender = await accountServices.findOneAccount({ attributes, next });
    if (accountSender.balance < amount) {
        throw next(new AppError('not enought money', 400));
    }


    //si ma mandaron un tipo Number busco por el numero de cuenta. y si me mandaron un string busco por nickName
    
    attributes.userId = receivingData;
    accountReceiving = await accountServices.findOneAccount({
        attributes,
        next,
    });
    //hago la transaccion y guardo.
    accountSender.balance -= amount;
    accountReceiving.balance += amount;
    accountSender.save();
    accountReceiving.save();
    const transfer = await transactionServices.transfer({
        senderId,
        receivingId,
        AccountId: accountSender.id,
        amount,
        method: 'transfer',
    });

    res.status(200).json({
        status: 'success',
        message: 'The transaction has been done',
        transfer,
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

module.exports = {
    createTransaction,
    chargePointCharge,
};
