const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('properties', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      constructed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      kitchen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      garage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      others: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: []
      },
      services: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: []
      },
      amenities: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: []
      },
      featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },{ timestamps: false });
  };