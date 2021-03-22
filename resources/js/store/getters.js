export default {
    orders(state) {
        return state.orders;
    },
    loggedIn(state) {
        return state.token != null;
    },
    token(state) {
        return state.token;
    },
    products(state) {
        return state.products;
    },
    all_products(state) {
        return state.all_products;
    },
    suppliers(state) {
        return state.suppliers;
    },
    all_suppliers(state) {
        return state.all_suppliers;
    }
};
