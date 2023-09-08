const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/AppError');
const transactionServices = require('../services/transaction.services');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();
const UserServices =require('../services/user.services')
const userServices = new UserServices()

const createTransaction = catchAsync(async (req, res, next) => {
    
    const id = req.params.id
    const { nickName,amount } = req.body;
    let {accountNumber,receiverId} = req.body;
    let attributes
    
    accountSender = await accountServices.findOneAccount({ attributes:{userId:id}, next });
    //verifico los fondos del senderId
    if (accountSender.balance < amount) {
        throw next(new AppError('not enought money', 400));
    }
    //si tengo fondos busco la cuenta de mi destinatario
    if(accountNumber){
        accountNumber = accountNumber + ""; // me lo pueden mandar como number o string desde el front.
        attributes = { account_number: accountNumber };
    }else if(nickName){
        const receiver = await userServices.findOneUser({attributes:{nickName}})
        attributes = { userId: receiver.id}
    } else if(receiverId){
        receiverId = +receiverId // me lo pueden mandar como number o string desde el front
        attributes = { userId: receiverId }
    }
        
    accountReceiver = await accountServices.findOneAccount({
        attributes,
        next,
    });
    
    //hago la transaccion y guardo.
    accountSender.balance -= amount;
    accountReceiver.balance += amount;
    accountSender.save();
    accountReceiver.save();
    const transfer = await transactionServices.transfer({
        senderId:id,
        receivingId:accountReceiver.userId,
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
