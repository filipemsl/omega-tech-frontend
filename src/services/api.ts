import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://projeto-final-omega.herokuapp.com',
})