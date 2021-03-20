require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./App.vue";
import AlertComponent from "./components/ui/AlertComponent.vue";
import TheHeader from "./components/ui/TheHeader.vue";

import routes from "./router.js";
import { store } from "./store/index.js";

Vue.component("alert-component", AlertComponent);
Vue.component("the-header", TheHeader);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                path: "/orders"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

const app = new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store
});
