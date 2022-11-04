'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      leaveFromDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      leaveToDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Pending', 'Approved', 'Rejected'),
        allowNull: false
      },
      leaveType: {
        type: Sequelize.ENUM('Half Day', 'Full Day', 'Multiple Days'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Leaves')
  }
}
