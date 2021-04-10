import axios from 'axios';

const app_id = '3401d90e0fcc7ce1b9e947bff142c7aa';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/'
});

instance.interceptors.request.use(req => {
  req.params = { ...req.params, appid: app_id };

  return req;
});

export default {
  instance
};
