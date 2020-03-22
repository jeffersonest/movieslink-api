const axios = require('axios');

const api = axios.create({
  baseURL: process.env.API_URL
});

api.interceptors.request.use(request => {
  console.log('======================== Starting Request ======================== \n', request, '\n================================================================')
  return request
})

module.exports = api;