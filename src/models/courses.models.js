const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Courses = sequelize.define('courses', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
  description: {
    type: DataTypes.STRING,
  },
  instructor: {
    type: DataTypes.STRING,
  }
});

module.exports = Courses;