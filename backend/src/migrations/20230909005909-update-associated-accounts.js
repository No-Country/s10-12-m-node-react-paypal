'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'Associated_Accounts',
            'contact_account_number',
            {
                allowNull: false,
                type: Sequelize.STRING,
            },
        );
        await queryInterface.addColumn('Associated_Accounts', 'contactId', {
            allowNull: false,
            type: Sequelize.INTEGER,
        });
        await queryInterface.addColumn(
            'Associated_Accounts',
            'contactNickName',
            {
                allowNull: false,
                type: Sequelize.STRING,
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn(
            'Associated_Accounts',
            'contact_account_number',
        );
        await queryInterface.removeColumn('Associated_Accounts', 'contactId');
        await queryInterface.removeColumn(
            'Associated_Accounts',
            'contactNickName',
        );
    },
};
