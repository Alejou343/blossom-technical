import { DataTypes } from 'sequelize';
import { sequelize } from '../config/mysql';
import { locations } from '../models/locations.model';

export const characters = sequelize.define("characters", {
  id_character: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('alive', 'dead', 'unknown'),
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM('female', 'male', 'genderless', 'unknown'),
    allowNull: true,
  },
  origin_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isLiked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
}, {
  tableName: 'characters',
  timestamps: true,
});

characters.belongsTo(locations, { foreignKey: "origin_id", targetKey: "id_origin", as: "origin" });
locations.hasMany(characters, { foreignKey: "origin_id", sourceKey: "id_origin", as: "characters" });
