const AppError = require('../helpers/AppError');
const generateRandomToken = require('../helpers/generateRandomToken');
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
            const attributes = { userId };
            const account = await this.findOneAccount({ attributes, next });

            if (account) {
                throw next(new AppError('user has already an account', 400));
            }
            const confirmation_account = generateRandomToken();
            const createdAccount = await db.Accounts.create({
                userId,
                balance: 100,
                account_detail_stripe: {},
                confirmation_account,
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

            const account = await this.findOneAccount({ attributes, next });
            if (!account) {
                throw next(new AppError('user has no active account', 404));
            }

            const card = await db.Cards.findOne({
                where: {
                    number,
                    type: 'debit',
                    security_code,
                    AccountId: account.id,
                },
            });
            if (!card) {
                throw next(new AppError('this card is no register', 404));
            }

            const transaction = await this.transactionServices.transfer({
                senderId: 1,
                receivingId: id,
                AccountId: 1,
                amount,
                method: 'recharge',
            });

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

    async confirmAccount(confirmation_account, status) {
        const account = await db.Accounts.findOne({
            where: { confirmation_account },
        });

        if (!account) {
            return 'invalid';
        } else {
            account.confirmation_account = status;
            await account.save();
            return status;
        }
    }

    async hasAccount(userId) {
        const account = await db.Accounts.findOne({
            where: { userId },
        });
        return !!account;
    }
}

module.exports = AccountServices;
