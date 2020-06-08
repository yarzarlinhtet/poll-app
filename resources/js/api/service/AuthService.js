import { api } from '../v1';

export const login = ( login ) => {
    return api.post("/login", login);
}

export const me = ()=> {
    return api.get('/me');
}