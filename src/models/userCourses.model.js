const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const UsersCourses = db.define(
    "users_courses",
    {
        id:{
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        user_id:{
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        course_id:{
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }
)

module.exports = UsersCourses;