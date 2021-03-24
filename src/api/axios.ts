import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://13a0717059d6.ngrok.io'
});
