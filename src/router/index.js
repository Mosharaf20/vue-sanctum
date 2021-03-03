import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(VueRouter);

const routes =  [
    {
        path: "/",
        component: Dashboard,
        name: "dashboard",
        meta: {
            authOnly: true
        }
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: {
            guestOnly: true,
        }
    },
    {
        path: "/register",
        component: Register,
        name: "register",
        meta: {
            guestOnly: true,
        }
    },
    {
        path: "/logout",
        name: "logout"
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

function isLoggedIn(){
    return localStorage.getItem('auth');
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    }else if(to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router;
