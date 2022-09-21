<template lang="pug">
#home
  #nav.nav-wrap(:class="[isTop? 'nav-bg-tran': 'nav-bg-light']")
    nav.navbar.navbar-expand-lg.fixed-top(:class="[isTop? 'navbar-dark': 'navbar-light']")
      .container-fluid
        a.navbar-brand(href='#') Shayne
        button.menu-icon.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarNavAltMarkup.collapse.navbar-collapse
          ul.navbar-nav.ms-auto
            li.nav-link(style="--bs-nav-link-font-size: 10px;" v-for="navItem in navLists")
              a(:href="navItem.path") {{navItem.name}}
Waypoint(@change="onchange")
  HomeView
AboutView
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import { Waypoint } from "vue-waypoint";
export default defineComponent({
  data() {
    return {
      isTop: true,
      navLists: [
        {
          name: "Home",
          path: "#home",
        },
        {
          name: "About",
          path: "#about",
        },
        {
          name: "Experience & Education",
          path: "#exp",
        },
        {
          name: "Skill",
          path: "#skill",
        },
        {
          name: "Project",
          path: "#project",
        },
        {
          name: "Download My CV",
          path: "#cv",
        },
      ],
    };
  },
  components: {
    HomeView,
    AboutView,
    Waypoint,
  },
  methods: {
    onchange(state: any) {
      console.log(state.going);
      if (state.going == "OUT") {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
    },
  },
});
</script>
<style lang="sass">
#app
  font-family: Nunito,Noto Sans TC,sans-serif
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
.nav-bg-tran
  background-color: transparent
  transition: 1s
.nav-bg-light
  background-color: var(--bs-light)
  transition: 1s
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
