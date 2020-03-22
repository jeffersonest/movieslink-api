const Server = require('./src/server');
const Envloader = require('./src/utils/envLoader');

if(!process.env.HEROKU_SERVER){
    const loadEnvironments = new Envloader(`${__dirname}/`);
}

const server = new Server(process.env.SERVER_PORT);

