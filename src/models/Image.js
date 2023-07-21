const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('images', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
          },
          propertyId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'properties',
              key: 'id',
            },
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          url: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },{ timestamps: false })

}