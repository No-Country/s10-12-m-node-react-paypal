'use strict';
const { Model, UUIDV4 } = require('sequelize');
const defaultValue = '/backend/public/media/image/avatar.png'
// const { v4: uuid } = require('uuid');
// const { Sequelize } = require('.');
// const { DataTypes } = require('sequelize');
// console.log(typeof(uuid())=== typeof(DataTypes.UUID))
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Associated_Accounts,{
                foreingKey: "id_user",
                as:"associated-accounts"})
              
              this.belongsTo(models.Billingdata,{
                foreingKey:"id_billingdata", //relacion al reves
                as: "billingdata"
              })
              
              this.belongsTo(models.Accounts,{
                foreingKey:"id_account", //deberia estar al reves
                as:"account"
              })
              
        }
    }
    User.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            nickName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            id_billingdata: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            id_account: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: defaultValue
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
