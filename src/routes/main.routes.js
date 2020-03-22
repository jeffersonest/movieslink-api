const Router = require('express').Router();
const MainController = require('../controllers/main.controller');

Router.get('/', MainController.index);

module.exports = Router;
