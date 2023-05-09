const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


//Rotas Home
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas contato
route.get('/contato', contatoController.homePage)

module.exports = route;
