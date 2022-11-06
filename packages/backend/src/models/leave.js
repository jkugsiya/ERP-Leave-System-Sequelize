'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Leave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Leave.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
      Leave.belongsTo(models.User, {
        foreignKey: 'approverId',
        as: 'approver'
      })
    }
  }
  Leave.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      approverId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
        allowNull: false,
        defaultValue: 'Pending'
      },
      leaveType: {
        type: DataTypes.ENUM('Half Day', 'Full Day', 'Multiple Days'),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Leave'
    }
  )
  return Leave
}
