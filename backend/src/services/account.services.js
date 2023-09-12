const AppError = require('../helpers/AppError');
const db = require('../models/index');
const TransactionServices = require('./transaction.services');

class AccountServices {
    transactionServices = TransactionServices;

    async findOneAccount({ attributes, next }) {
        try {
            const account = await db.Accounts.findOne({
                where: attributes,
                include: [
                    {
                        model: db.Cards,
                    },
                ],
            });
            return account;
        } catch (error) {
            throw new Error(error);
        }
    }
    async createAccount(userId, next) {
        try {
            const account = await this.findOneAccount({
                attributes: {
                    userId,
                },
                next,
            });
            if (account) {
                throw next(new AppError('user already has an account', 400));
            }
            const createdAccount = await db.Accounts.create({
                userId,
                balance: 100,
                account_detail_stripe: {},
            });
            return createdAccount;
        } catch (error) {
            throw error;
        }
    }
    async rechargeAccount({ body, id, next }) {
        try {
            const { number, security_code, amount } = body;
            const attributes = { userId: id };

            //buscar cuenta del usuario//
            const account = await this.findOneAccount({ attributes, next });
            if (!account) {
                throw next(new AppError('user has no active account', 404));
            }
            //buscar tarjeta del usuario//
            const card = await db.Cards.findOne({
                where: {
                    number,
                    type: 'debito',
                    security_code,
                    AccountId: account.id,
                },
            });
            if (!card) {
                throw next(new AppError('this card is no register', 404));
            }

            //usar servicio de crear trabsaferencia//
            const transaction = await this.transactionServices.transfer({
                senderId: 1,
                receivingId: id,
                AccountId: 1,
                amount,
                method: 'recharge',
            });
            //ajustar balance de la cuenta
            const newAccountBalance = eval(account.balance + amount);
            await account.update({ balance: newAccountBalance });

            return transaction;
        } catch (error) {
            throw new Error(error);
        }
    }
    async chargeAccountChargePoint({ userId, amount }) {
        try {
            const account = await db.Accounts.findOne({
                where: { userId: userId },
            });
            if (!account) {
                throw next(new AppError('account not found', 404));
            }
            account.balance += amount;
            account.save();
            return account;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = AccountServices;
