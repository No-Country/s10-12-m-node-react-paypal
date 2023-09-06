'use strict';
const { Model } = require('sequelize');
const uniqueId = require('../helpers/randomId');
console.log('idrandom,', uniqueId());
module.exports = (sequelize, DataTypes) => {
    class Accounts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'userId' });

            this.hasMany(models.Transaction, { foreignKey: 'AccountId' });

            this.hasMany(models.Cards, { foreignKey: 'AccountId' });
        }
    }
    Accounts.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            account_number: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: () => uniqueId(),
            },
            balance: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            account_detail_stripe: {
                type: DataTypes.JSON,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Accounts',
        },
    );
    return Accounts;
};
