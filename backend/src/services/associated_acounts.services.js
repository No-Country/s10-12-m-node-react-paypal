const AppError = require('../helpers/AppError')
const db = require('../models/index')
const AccountServices = require('./account.services')

class AssociatedAccServices {
    accountService = AccountServices

    async getAllAssociatedAcc(userId) {
        try {
            const userAssociated = await db.Associated_Accounts.findOne({
                where: { userId: userId },
            })
            return userAssociated
        } catch (error) {
            throw new Error(error)
        }
    }

    async createAssociatedAcc(userId) {
        try {
            const createAssociated = await db.Associated_Accounts.create({
                userId
            })
            return createAssociated
        } catch (error) {
            throw new Error(error)
        }

    }

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


    async deleteAssociatedAcc(userId) {
        try {
            const deletedAssociated = await db.Associated_Accounts.destroy({
                where: { userId: userId }
            })
            return deletedAssociated
        } catch (error) {
            throw new Error(error)
        }

    }

}

module.exports = AssociatedAccServices


