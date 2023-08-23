'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AsociatedAccount extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AsociatedAccount.init(
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
        },
        {
            sequelize,
            modelName: 'AsociatedAccount',
        },
    );
    return AsociatedAccount;
};