import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.151:3000'
});

instance.interceptors.request.use(req => {
  const token = localStorage.getItem('token');

  if (token) {
    req.headers = {
      Authorization: `Bearer ${token}`
    };
  }

  return req;
});

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (err.response.status === 401) {
      window.location.replace('/login');
    }
    console.log(err.response);
    return Promise.reject(err);
  }
);

// 192.168.0.151
export default instance;
