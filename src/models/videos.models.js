const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Courses = require('./courses.models');

const Videos = sequelize.define('videos', {
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
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Courses.hasMany(Videos,{foreingKey: {
    name: 'course_id'
  }})
  
  
module.exports = Videos;