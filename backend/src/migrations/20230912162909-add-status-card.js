'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Cards', 'status', {
            allowNull: false,
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Cards', 'status');
    },
};
