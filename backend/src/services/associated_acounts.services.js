const AppError = require('../helpers/AppError');
const db = require('../models/index');
const AccountServices = require('./account.services');
const UserServices = require('./user.services');

class AssociatedAccServices {
    accountService = new AccountServices();

    async getAllAssociated({ id }) {
        // const userService = new UserServices();
        try {
            // const user = await userService.findOneUser({
            //     attributes: { id: id },
            // });
            // if (!user) {
            //     throw next(new AppError('User does not exist', 400));
            // }
            // const userId = user.id;
            const userAssociated = await db.Associated_Accounts.findAll({
                where: { userId: id },
            });
            return userAssociated;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createAssociated({ sessionUser, body, next }) {
        try {
            const { contact_account_number, contactNickName } = body;
            const { id } = sessionUser;

            const contactAccount = await this.accountService.findOneAccount({
                attributes: { account_number: contact_account_number },
                next,
            });

            const createAssociated = await db.Associated_Accounts.create({
                userId: id,
                contactId: contactAccount.userId,
                contact_account_number,
                contactNickName,
            });
            return createAssociated;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteAssociated({ id, contactId }) {
        // const userService = new UserServices();
        try {
            // const user = await userService.findOneUser({
            //     attributes: { id: id },
            // });
            // if (!user.id) {
            //     throw next(new AppError('User does not exist', 400));
            // }
            const deletedAssociated = await db.Associated_Accounts.destroy({
                where: { userId: id, contactId },
            });
            return deletedAssociated;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = AssociatedAccServices;
