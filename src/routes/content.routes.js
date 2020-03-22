const Router = require('express').Router();
const ContentController = require('../controllers/content.controller');

Router.get('/', ContentController.index.bind(ContentController));
Router.get('/search', ContentController.search.bind(ContentController));


module.exports = Router;
