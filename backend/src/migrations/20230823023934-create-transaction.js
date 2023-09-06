'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Transactions', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            sender_user: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            receiving_user: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            AccountId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
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
        await queryInterface.dropTable('Transactions');
    },
};
