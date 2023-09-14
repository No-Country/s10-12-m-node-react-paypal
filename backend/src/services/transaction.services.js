const db = require('../models/index');
const AppError = require('../helpers/AppError');

class TransactionServices {
    async transactionDetail({
        transactionId,
        amount,
        method,
        payment_method,
        id_transaction_stripe,
    }) {
        try {
            const TransactionDetail = await db.Detail_transactions.create({
                transactionId,
                amount,
                method,
                payment_method,
                status: 'succes',
                id_transaction_stripe,
            });

            return TransactionDetail;
        } catch (error) {
            throw new Error(error);
        }
    }

    async transfer({
        senderId,
        receivingId,
        AccountId,
        amount = 0,
        method = 'transfer',
    }) {
        try {
            const transaction = await db.Transaction.create({
                sender_user: senderId.toString(),
                receiving_user: receivingId.toString(),
                AccountId,
                date: Date.now(),
            });

            let payment_method = '';
            let id_transaction_stripe = null;
            if (method == 'transfer') payment_method = 'transfer';

            if (method == 'recharge') {
                console.log('recharge');
                payment_method = 'recarga';
                id_transaction_stripe = `${AccountId}_recharge`;
                console.log(id_transaction_stripe);
            }

            const TransactionDetail = await this.transactionDetail({
                transactionId: transaction.id,
                amount, //esta mal escrito en la tabla
                method,
                payment_method,
                id_transaction_stripe,
            });

            const receivingUser = await db.User.findOne({
                where: {
                    id: transaction.receiving_user,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'password'],
                },
            });

            return { TransactionDetail, receivingUser, transaction };
        } catch (error) {
            throw new Error(error);
        }
    }

    async getTransactions({ id, next }) {
        try {
            const transactions = await db.Transaction.findAll({
                where: {
                    sender_user: id,
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
                include: [
                    {
                        model: db.Detail_transactions,
                    },
                ],
            });

            return transactions;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new TransactionServices();
