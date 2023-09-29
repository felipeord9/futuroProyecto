"use strict";

const { USER_TABLE, UserSchema} = require('../models/userModel')
const { PRODUCT_TABLE,ProductSchema} = require('../models/productModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
