'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'Users',
            'nickName',
            {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'Users',
            'nickName',
            {
                type: Sequelize.STRING,
                unique: false,
                allowNull: true,
            },
        );
    },
};
