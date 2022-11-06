'use strict'

const { hash } = require('bcrypt')
const { v4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: v4(),
        name: 'Admin',
        email: 'admin@admin.com',
        role: 'Admin',
        position: 'Admin',
        password: await hash('admin', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
