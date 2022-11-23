const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const Users = require('./users.models');

const initModels = () => {
    Courses;
    Categories;
    Videos;
    Users;
}

module.exports = initModels;