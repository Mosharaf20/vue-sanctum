import Api from "./Api";
import Csrf from "./Csrf"

export default {
    async register(form){
        await Csrf.getCookies();
        return Api.post('register',form)
    },

    async login(form){
        await Csrf.getCookies();
        return Api.post('login',form)
    },

    async logOut(){
        await Csrf.getCookies();
        return  Api.post('logout')
    },

    auth(){
        return Api.get('user');
    }
}