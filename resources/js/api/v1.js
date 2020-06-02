import axios from 'axios';
import store from '../store';

const api = axios.create({
    baseURL: '/api/'
});

if(store.getters.token){
    api.defaults.headers.common['Authorization'] = store.getters.token;
}

export {
    api,
}