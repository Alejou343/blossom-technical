import { DataTypes } from 'sequelize';
import { sequelize } from '../config/mysql';

export const locations = sequelize.define("locations", {
  id_location: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_origin: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dimension: {
    type: DataTypes.STRING,
    allowNull: true,
  }
  }, {
    tableName: 'locations',
    timestamps: true,
  }
);