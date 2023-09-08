'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //asociaciones de Associated_Accounts
        await queryInterface.changeColumn(
            'Associated_Accounts', // nombre de la tabla
            'userId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //asociaciones de Accounts
        await queryInterface.changeColumn(
            'Billingdata', // nombre de la tabla
            'userId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );
        //asociaciones de billingdata
        await queryInterface.changeColumn(
            'Accounts', // nombre de la tabla
            'userId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );
        //asociaciones de Cards
        await queryInterface.changeColumn(
            'Cards', // nombre de la tabla
            'AccountId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Accounts',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //asociaciones de Transaction
        await queryInterface.changeColumn(
            'Transactions', // nombre de la tabla
            'AccountId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Accounts',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //asociaciones de Detail_transactionss
        await queryInterface.changeColumn(
            'Detail_transactions', // nombre de la tabla
            'transactionId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Transactions',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        ///////////////
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.changeColumn(
            'Associated_Accounts', // nombre de la tabla
            'userId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );

        //asociaciones de Accounts
        await queryInterface.changeColumn(
            'Billingdata', // nombre de la tabla
            'userId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );
        //asociaciones de billingdata
        await queryInterface.changeColumn(
            'Accounts', // nombre de la tabla
            'userId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );
        //asociaciones de Cards
        await queryInterface.changeColumn(
            'Cards', // nombre de la tabla
            'AccountId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );

        //asociaciones de Transaction
        await queryInterface.changeColumn(
            'Transactions', // nombre de la tabla
            'AccountId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );

        //asociaciones de Detail_transactionss
        await queryInterface.changeColumn(
            'Detail_transactions', // nombre de la tabla
            'transactionId', // nombre de la columna a cambiar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        );
    },
};
