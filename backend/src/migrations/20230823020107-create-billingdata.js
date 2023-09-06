'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Billingdata', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            postalcode: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            province: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nationalidentification: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Billingdata');
    },
};
