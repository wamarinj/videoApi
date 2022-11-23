const Sequelize = require('sequelize');

const db = new Sequelize({
    database: "video_courses",
    username: "postgres",
    password: "root",
    port: "5432",
    dialect: "postgres",
});

module.exports = db;