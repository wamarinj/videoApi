const db = require('../utils/database');
const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/userCourses.model");
const initModel = require("../models/initModels");

initModel();

const users = [
    { first_name: "Andres", last_name: "Jimenez" , password: "1234", email: "andres@gmail.com"},//1
    { first_name: "Alvis", last_name:"Echeverria", password: "1234", email: "alvis@gmail.com"},//2
    { first_name: "Carlos", last_name: "Tineo", password: "1234", email: "carlos@gmail.com"},//3
    { first_name: "Jack", last_name: "Sparrow", password: "1234", email: "sparrow@gmail.com"},//4
  ];

  const categories = [
    { name: "web development" }, //1
    { name: "Life Style" }, //2
  ];

  const courses = [
    { title: "JavaScript", description: "JavaScript to doomies", instructor: "Bill Gates"},//1
    { title: "Python", description: "Python to doomies", instructor: "Mark Zuckerberg"},//2
    { title: "Data Bases", description: "Data Bases", instructor: "Jeff Bezos"},//3
    { title: "Self-defense", description: "The basic of Self-defense", instructor: "Myke Tyson"},//4
    { title: "International Food", description: "The best of food", instructor: "Ferran Adria"},//5
  ];

  const videos = [
    {title: "Introduction to JavaScript", url: "www.javascrpit.com/intro"},
    {title: "Introduction to Python", url: "www.python.com/intro"},
    {title: "Introduction to Data Bases", url: "www.databases.com/intro"},
    {title: "3 simple self defence moves you must know", url: "https://www.youtube.com/watch?v=UV78YzM-gGQ"},
    {title: "la cocina es un lenguaje internacional", url: "https://www.youtube.com/watch?v=TLdwqaAwzHI"},
  ];

  const usersCourses = [
    {user_id: 1, course_id:1},
    {user_id: 1, course_id:5},
    {user_id: 1, course_id:3},
    {user_id: 2, course_id:2},
    {user_id: 2, course_id:1},
    {user_id: 3, course_id:1},
    {user_id: 3, course_id:2},
    {user_id: 3, course_id:3},
    {user_id: 4, course_id:4},
    {user_id: 4, course_id:1},
    {user_id: 4, course_id:3},
  ];

  db.sync({ force: true })
  .then( () => {
    console.log('Iniciando informacion');
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course))
    }, 100);
    setTimeout(() => {
      videos.forEach((video) => Videos.create(video))
    },200);
    setTimeout(() =>{
      categories.forEach((categories) => Categories.create(categories))
    },300);
    setTimeout(() =>{
      usersCourses.forEach((usersCourses) => UsersCourses.create(usersCourses))
    },400);
  })
  .catch((error) => console.log(error));