import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 1000,
    headers: { Accept: 'application/json' }
});

export default instance;
