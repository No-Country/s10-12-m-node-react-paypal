'use strict';
const { Model } = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Associated_Accounts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    }
    Associated_Accounts.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            contact_account_number: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            contactId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            contactNickName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Associated_Accounts',
        },
    );
    return Associated_Accounts;
};
