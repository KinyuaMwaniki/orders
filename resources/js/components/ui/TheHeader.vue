<template>
  <nav id="nav">
    <ul>
      <router-link
        v-if="!isLoggedIn"
        to="/"
        tag="li"
        active-class="current"
        exact
        ><a>Login</a></router-link
      >
      <router-link
        v-if="isLoggedIn"
        to="/dashboard"
        tag="li"
        active-class="current"
        exact
        ><a>Dashboard</a></router-link
      >
      <router-link
        v-if="isLoggedIn"
        to="/orders"
        tag="li"
        active-class="current"
        exact
        ><a>Orders</a></router-link
      >
      <router-link
        v-if="isLoggedIn"
        to="/products"
        tag="li"
        active-class="current"
        exact
        ><a>Products</a></router-link
      >
      <router-link
        v-if="isLoggedIn"
        to="/suppliers"
        tag="li"
        active-class="current"
        exact
        ><a>Suppliers</a></router-link
      >
      <router-link
        v-if="isLoggedIn"
        to="/logout"
        tag="li"
        active-class="current"
        exact
        ><a>Logout</a></router-link
      >
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>