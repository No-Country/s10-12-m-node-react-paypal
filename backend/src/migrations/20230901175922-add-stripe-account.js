'use strict';

const { QueryInterface } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Accounts', 'account_stripe_detail',{
      allowNull: true,
      type: Sequelize.JSON
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Accounts', 'account_stripe_detail');
  }
};
