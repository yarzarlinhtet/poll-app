import axios from 'axios';
import store from '../store';

const api = axios.create({
    baseURL: '/api/',
    //headers: { "Authorization" : `${store.getters.token ? store.getters.token: ''}`}
});

// if(store.getters.token){
//     api.defaults.headers.common['Authorization'] = store.getters.token;
// }
api.interceptors.request.use(function (config) {
    if(store.getters.token){
        config.headers.common['Authorization'] = store.getters.token;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export {
    api,
} 