'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Cards', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            AccountId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            exp_date: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category: {
                type: Sequelize.ENUM('visa', 'mastercard', 'americanExpress'),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            security_code: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            //vole la FK de account
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Cards');
    },
};
