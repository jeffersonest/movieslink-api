# movieslink-api

Movieslink is an application made with React that uses the [version 3 of The Movie Database (TMDb) API](https://developers.themoviedb.org/3/getting) to list and search everything about movies, series and genres ...

### 1.External Libs:

  - [axios] (https://github.com/axios/axios)
  - [body-parser] (https://github.com/expressjs/body-parser)
  - [cors] (https://github.com/expressjs/cors)
  - [dotenv] (https://github.com/motdotla/dotenv)
  - [express] (https://github.com/expressjs/express)
  - [helmet] (https://github.com/helmetjs/helmet)
  
### 2. Architecture:

  - MVC principles:
    The request comes to the router and the route is redirects to the controller, after the controller processes the data sends a response to client that makes the request.

    [WEBAPP] ----> [Route] ----> [Controller] <----> [External API] <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|________________________________|
    
### 2. API Components:

   - Controllers:
      - Content Controller
        methods: 
          - index: load default upcoming content
          - search: gets content from query
          - getGenreName: gets a genre name from a genre list
          - genres: gets a genre list from an external api
          - getPagination: manage the pages
          
      - Main Controller
        methods: 
          - index: return the api status

      - Routes: 
        - api/ : returns api the status
        - api/content/ : load default upcoming content (required params: { page : number})
        - api/content/search : gets content from query (required params: { page : number, content_name: string})
        - api/content/genres : gets a genre list from an external api (required params: {genres : Array [genre_id : number]})
    
### 3. Environments:

        PORT= [server port number ex: 3000]
        API_KEY= [get your api key and use here https://api.themoviedb.org/3/]
        API_URL="https://api.themoviedb.org/3/"
        API_LANGUAGE=en-US [language sended to api url]
    
### 4. Starting the API:
  To add more environment files see the env_loader in src/utils/envLoader.js and add more cases: 
  
  - To start the app using the .env.development, use:  
      
            yarn dev
            
  - To start the app using the .env, use:
      
            yarn start 
        
### 5. Deploy:
  
  Run the service with your node server. On Heroku don't set PORT on your .env.file because the Heroku generates a port automatically.
       

By Jefferson Estevam with ♥
