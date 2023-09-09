const AppError = require('../helpers/AppError')
const db = require('../models/index')
const AccountServices = require('./account.services')
const UserServices = require('./user.services')

class AssociatedAccServices {
    accountService = new AccountServices()

    async getAllAssociated({ id }) {
        const userService = new UserServices()
        try {
            const user = await userService.findOneUser({
                attributes: { id: id },
            })
            if (!user) {
                throw next(new AppError('User does not exist', 400));
            }
            const userId = user.id
            const userAssociated = await db.Associated_Accounts.findOne({
                where: { userId: id },
            })
            return userAssociated
        } catch (error) {
            throw new Error(error)
        }
    }

    async createAssociated({ id, body, next }) {
        const userService = new UserServices()
        try {
            const user = await userService.findOneUser({
                attributes: { id: id },
            })
            if (!user) {
                throw next(new AppError('User does not exist', 400));
            }
            const userId = user.id
            const createAssociated = await db.Associated_Accounts.create({
                userId
            })
            return createAssociated
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAssociated({ id }) {
        const userService = new UserServices()
        try {
            const user = await userService.findOneUser({
                attributes: { id: id },
            })
            if (!user.id) {
                throw next(new AppError('User does not exist', 400));
            }
            const deletedAssociated = await db.Associated_Accounts.destroy({
                where: { userId: id }
            })
            return deletedAssociated
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = AssociatedAccServices


