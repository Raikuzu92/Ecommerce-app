const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', // Referencing the Product model
        key: 'id',
      },
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', // Referencing the Tag model
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);


module.exports = Tag;
