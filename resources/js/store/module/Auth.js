import { getItem, setItem, removeItem } from '../../api/service/localStorageService';
import { STORE_NAME } from '../../constant';
const user = getItem(STORE_NAME);

export const state = {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
    reg_error: null,
    registeredUser: null,
};

export const getters = {
    isLoading(state) {
        return state.loading;
    },
    isLoggedin(state) {
        return state.isLoggedIn;
    },
    currentUser(state) {
        return state.currentUser;
    },
    authError(state) {
        return state.auth_error;
    },
    regError(state) {
        return state.reg_error;
    }, 
    registeredUser(state) {
        return state.registeredUser;
    },
    token(state) {
        if(state.currentUser && state.currentUser.token)
        {
            return `Bearer ${state.currentUser.token}`;
        }
        return false;
    }
};

export const mutations = {
    login(state) {
        state.loading = true;
        state.auth_error = null;
    },
    loginSuccess(state, payload) {
        state.auth_error = null;
        state.isLoggedin = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, { token: payload.access_token });
        // localStorage.setItem("user", JSON.stringify(state.currentUser));
        setItem("user",  state.currentUser); //STORE_NAME
    },
    loginFailed(state, payload) {
        state.loading = false;
        state.auth_error = payload.error;
    },
    logout(state) {
        // localStorage.removeItem("user");
        removeItem('user');//STORE_NAME
        state.isLoggedin = false;
        state.currentUser = null;
    },
    registerSuccess(state, payload) {
        state.reg_error = null;
        state.registeredUser = payload.user;
    },
    registerFailed(state, payload) {
        state.reg_error = payload.error;
    },
}

export default {
    state,
    mutations,
    getters,
}