const api = require("../../services/api");
const _ = require('lodash');
class ContentController {

  async index(req, res, next) {
    const {page} = req.query;
    try {
      let query = {
        params: {
          api_key: process.env.API_KEY,
          language: process.env.API_LANGUAGE,
          page,
          include_adult: false,
        }
      };

      let { data } = await api.get("movie/popular", query);

      let movies = this.getPagination(data);

      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async search(req, res, next) {
    try {
      let { page, content_name='' } = req.query;
      let query = {
        params: {
          api_key: process.env.API_KEY,
          language: process.env.API_LANGUAGE,
          page,
          include_adult: false,
          query: content_name,
          include_adult: false,
        }
      };

      let { data } = await api.get("search/multi", query);

      let movies = this.getPagination(data);

      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  getGenreName(genre_id, genre_list) {
      var genre_name = '';
      for(let index=0; index <= genre_list.length - 1; index++){
        if(genre_list[index].id == genre_id){  
          genre_name =genre_list[index].name;
          break;
        }
      }

      return genre_name;
  }

  async genres(req, res, next) {
    try {
      let { genres } = req.query;
      let query = {
        params: {
          api_key: process.env.API_KEY,
          language: process.env.API_LANGUAGE,
        }
      };

      let {data}  = await api.get("/genre/movie/list", query);
      let genre_names = [];
    
      genres.map((genre_id)=>{
        genre_names.push(this.getGenreName(genre_id, data.genres));
      });

      return res.status(200).send(genre_names.join(' / '));
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  getPagination(movies) {

    try {

      const { page, total_pages } = movies;

      let newMovies = {
        ...movies,
        next_page: page > 0 && page !== total_pages ? page + 1 : null,
        prev_page: page > 0 && page !== 1 ? page - 1 : null
      };

      return newMovies;

    } catch (error) {
      return error;
    }
  }
}

module.exports = new ContentController();
