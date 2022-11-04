'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Leaves', 'userId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    })
    await queryInterface.addColumn('Leaves', 'approverId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Leaves', 'userId')
    await queryInterface.removeColumn('Leaves', 'approverId')
  }
}
