import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state() {
        return {
            token: localStorage.getItem("access_token") || null,
            orders: {}, 
            products: {},
            suppliers: {},
            all_suppliers: [],
            all_products: [],
            all_orders: [] 
        };
    },
    mutations,
    actions,
    getters
});
