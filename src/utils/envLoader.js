class EnvLoader {
    constructor(envpath) {
      console.log(envpath)
      this.envpath = envpath;
      this.fs = require('fs');
      this.dotenv = require('dotenv');
      this.env = this.checkEnv();
      this.loadEnv();
    }
  
    loadEnv() {
      const envConfig = this.dotenv.parse(this.fs.readFileSync(this.env));
      for (const i in envConfig) {
        process.env[i] = envConfig[i];
      }
    }
  
    checkEnv() {
      
      switch (process.env.NODE_ENV) {
        case 'development':
          console.log(`Server Using: development ENV`);
          return `${this.envpath}/.env.development`;
        case 'production':
          console.log(`Server Using: production ENV`);
          return `${this.envpath}/.env.production`;
        default:
          console.log(`Server Using: development ENV`)
          return `${this.envpath}/.env`;
      }
    }
  }
  
  module.exports = EnvLoader;
  