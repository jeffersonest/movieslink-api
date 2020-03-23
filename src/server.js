class Server {

    constructor(port) {

        this.bodyParser = require('body-parser')
        this.server = require('express')();
        this.cors = require('cors');
        this.routes = require('./routes');

        this.PORT = port;

        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeServer();
        
    }

    initializeMiddlewares() {
        this.server.use(this.cors());
        this.server.use(this.bodyParser.urlencoded({ extended: false }));
    }

    async initializeRoutes() {
        this.server.use('/api', this.routes);
    }

    initializeServer() {
        this.server.listen(this.PORT, ()=> console.log(`Listening on PORT: ${this.PORT}`));
    }
}
module.exports = Server