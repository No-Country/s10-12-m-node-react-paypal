const AppError = require('../helpers/AppError');
const db = require('../models');
const AccountServices = require('./account.services');

class CardServices {
    accountServices = new AccountServices();

    async createOneCard({ body, id, next }) {
        try {
            const account = await this.accountServices.findOneAccount({
                attributes: { userId: id },
                next,
            });
            if (!account) {
                throw next(new AppError('user has not an active account', 404));
            }
            body.AccountId = account.id;
            const card = await db.Cards.create(body);
            return card;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteOneCard({ userId, body, next }) {
        try {
            const { number } = body;
            const account = await this.accountServices.findOneAccount({
                attributes: { userId },
                next,
            });
            if (!account) {
                throw next(new AppError('user has not an active account', 404));
            }
            const card = await db.Cards.findOne({
                where: {
                    AccountId: account.id,
                    number,
                    status: true,
                },
            });
            if (!card) {
                throw next(new AppError('card not found', 404));
            }
            await card.update({ status: false });
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = CardServices;
