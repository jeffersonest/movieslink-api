const Router = require('express').Router();
const contentRoutes = require('./content.routes');
const mainRoutes = require('./main.routes');

Router.use('/', mainRoutes);
Router.use('/content', contentRoutes);


module.exports = Router