const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{ timestamps: false });
  };