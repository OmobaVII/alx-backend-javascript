const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const route = express.Router();

route.get('/', AppController.getHomepage);

route.get('/students', StudentsController.getAllStudents);

route.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = route;
