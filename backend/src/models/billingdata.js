'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Billingdata extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Billingdata.init(
        {
            street: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            postalcode: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            province: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nationalidentification: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Billingdata',
        },
    );
    return Billingdata;
};
