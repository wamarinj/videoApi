const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Courses = require('./courses.models');

const Categories = sequelize.define('categories', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  }
});

Courses.hasMany(Categories,{foreingKey: {
  name: 'course_id'
}})


module.exports = Categories;