const api = require("../../services/api");

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
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async search(req, res, next) {
    try {
      let { page, content_name } = req.query;
      let query = {
        params: {
          api_key: process.env.API_KEY,
          language: process.env.API_LANGUAGE,
          page,
          include_adult: false,
          query: content_name
        }
      };

      let { data } = await api.get("search/multi", query);


      let movies = this.getPagination(data);

      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json({ error: error.message });
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
      console.log(error);
    }
  }
}

module.exports = new ContentController();
