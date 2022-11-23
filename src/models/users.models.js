const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Courses = require('./courses.models');
const UsersCourses = require("../models/userCourses.model");

const Users = sequelize.define('users', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull defaults to true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    }
});

// Users.belongsToMany(Courses, { through: UsersCourses,  });
// Courses.belongsToMany(Users, { through: UsersCourses });

UsersCourses.belongsTo(Users, { foreignKey:"user_id"});
Users.hasMany(UsersCourses,  { foreignKey:"user_id"});

UsersCourses.belongsTo(Courses,  { foreignKey:"course_id"});
Courses.hasMany(UsersCourses,  { foreignKey:"course_id"});



module.exports = Users;