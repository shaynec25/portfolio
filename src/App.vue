<template lang="pug">
#home
  #nav.nav-wrap
    nav.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top
      .container-fluid
        a.navbar-brand(href='#') Shayne
        button.menu-icon.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarNavAltMarkup.collapse.navbar-collapse.bg-light
          ul.navbar-nav.ms-auto
            li.nav-link
              a(href='#home') Home
            li.nav-link
              a(href='#about') About
  HomeView
  HomeView
  AboutView
  HomeView
  HomeView
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

export default defineComponent({
  components: {
    HomeView,
    AboutView,
  },
});
</script>
<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.nav-wrap
  height: 45px
  width: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 99
nav
  padding: 30px
  height: 45px
nav a
  font-weight: bold
  color: #2c3e50
nav a.router-link-exact-active
  color: #42b983
.menu-icon
  border: none !important
</style>
