<template lang="pug">
#home
  #nav.nav-wrap(:class="[isTop? 'nav-bg-tran': 'nav-bg-light' ]")
    nav.navbar.navbar-expand-lg(:class="[isTop? 'navbar-dark': 'navbar-light']")
      .container-fluid
        a.navbar-brand(href='#') Shayne
        button.menu-icon.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarNavAltMarkup.collapse.navbar-collapse.nav-right
          ul.navbar-nav.ms-auto
            li.nav-link(style="--bs-nav-link-font-size: 10px;" v-for="navItem in navLists")
              a(:href="navItem.path" :class="[isTop? 'text-light' : 'text-dark']") {{navItem.name}}
Waypoint(@change="onchange")
  HomeView
AboutView
EnEView
SkillView
WorkView
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Waypoint } from "vue-waypoint";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import EnEView from "@/views/EnEView.vue";
import SkillView from "@/views/SkillView.vue";
import WorkView from "@/views/WorkView.vue";

export default defineComponent({
  components: {
    HomeView,
    AboutView,
    Waypoint,
    EnEView,
    SkillView,
    WorkView,
  },
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
          path: "#experienceAndEdu",
        },
        {
          name: "Skill",
          path: "#skill",
        },
        {
          name: "Work",
          path: "#work",
        },
        {
          name: "Download My CV",
          path: "#cv",
        },
      ],
    };
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
  -webkit-box-shadow: 0 -1px 10px rgb(0 0 0 / 25%)
  transition: 1s
nav
  padding: 30px
  height: 45px
nav a
  text-decoration: none
  font-weight: bold
.nav-right
  position: absolute
  top: 5px
  right: 0px
  padding-right: 1rem
  // width: 400px
.menu-icon
  border: none !important
.bg-light-green
  background-color: #d8ddd4
</style>
