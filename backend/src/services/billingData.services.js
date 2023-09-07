const db = require('../models/index');
const AppError = require('../helpers/AppError');

class BillingDataServices {
    async createBillingData ({userId,body}){
       try {
        const user = await this.findOneUser({
            where:{id: userId},
        });
        if(!user){
            return next(
                new AppError(`User not found`, 404),
            );
        }
        const billingData = await db.Billingdata.create(body)
        return billingData;
       } catch (error) {
        throw new Error(error);
       }
    };

    async findOneUser({ attributes, next }) {
        try {
            console.log(attributes)
            const user = await db.User.findOne({
                where: attributes,
            });
            return user;
        } catch (error) {
            throw new Error(error);
        }
    };
    
    async updateBillingData (){

    }
}

module.exports = BillingDataServices;