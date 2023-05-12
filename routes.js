const express = require('express');
const route = express.Router();
const loginController = require('./src/controllers/loginController')
const homeController = require('./src/controllers/homeController')


//Rotas Home
route.get('/', homeController.index);

//Rotas de Login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)
module.exports = route;
