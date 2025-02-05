import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
});

export default apiInstance;