import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?key=1bfed859&city_name=',
});

export default api;
