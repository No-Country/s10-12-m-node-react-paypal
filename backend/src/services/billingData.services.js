const db = require('../models/index');
const AppError = require('../helpers/AppError');
const UserServices = require('../services/user.services');
class BillingDataServices {
    async createBillingData({ id, body, next }) {
        const userServices = new UserServices();
        try {
            const user = await userServices.findOneUser({
                attributes: { id: id },
                next,
            });
            if (!user) {
                throw next(new AppError('User does not exist', 400));
            }
            body.userId = user.id;
            const billing = await db.Billingdata.create(body);
            return billing;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findBilling(id) {
        try {
            const billingdata = await db.Billingdata.findOne({
                where: { userId: id },
                include: [{ model: db.User }],
            });
            return billingdata;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateBillingData({ body, id, next }) {
        try {
            const billing = await this.findBilling(id);
            if (!billing) {
                throw next(new AppError('Non-existent data', 400));
            }
            if (!body) {
                throw next(new AppError('No data', 400));
            }
            const whereClause = { userId: id };
            const update = await db.Billingdata.update(body, {
                where: whereClause,
            });

            return update;
        } catch (error) {
            throw new Error(error);
        }
    }

    async sendBillinData({ id, next }) {
        try {
            const billing = await this.findBilling(id);
            if (!billing) {
                throw next(new AppError('Non-existent data', 404));
            }
            console.log(billing.dataValues);
            return billing.dataValues;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = BillingDataServices;
