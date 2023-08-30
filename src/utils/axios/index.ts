import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const coinGeckoAPI = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});