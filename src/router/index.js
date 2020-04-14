
const Router = require('express').Router();

const perfilController = require('../controllers/perfiles');


Router.get('/', perfilController.index)
Router.get('/:perfil', perfilController.perfil)



module.exports = function() {
    return Router;
}