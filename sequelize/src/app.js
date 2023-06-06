const express = require('express');

const User = require('./controllers/user.controller');
const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);
app.get('/employees', employee.getAll);
app.get('/employees/:id', employee.getById)

module.exports = app;