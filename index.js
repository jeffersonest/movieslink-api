const Server = require('./src/server');
const Envloader = require('./src/utils/envLoader');

const loadEnvironments = new Envloader(`${__dirname}/`);

const server = new Server(process.env.PORT || 3000);

