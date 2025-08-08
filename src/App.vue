<template lang="pug">
#home
  #nav.nav-wrap(:class="[isTop? 'nav-bg-tran': 'nav-bg-light' ]")
    nav.navbar.navbar-expand-lg(:class="[isTop? 'navbar-dark': 'navbar-light']")
      .container-fluid
        a.navbar-brand(href='#') Shayne
        button.menu-icon.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarOnMobile' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarOnMobile.collapse.navbar-collapse
          ul.navbar-nav.ms-auto
            li.nav-link(style="--bs-nav-link-font-size: 10px;" v-for="navItem in navLists")
              a.d-none.d-lg-block(:href="navItem.path" :class="[isTop? 'text-light' : 'text-dark']") {{navItem.name}}
              a.d-lg-none.text-light(:href="navItem.path") {{navItem.name}}
            li.nav-link.lang-text(style="--bs-nav-link-font-size: 10px;" @click="setLang") {{$t('btn-lang')}}
Waypoint(@change="onchange")
  HomeView
AboutView
EnEView
SkillView
WorkView
SpecialView
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Waypoint } from "vue-waypoint";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import EnEView from "@/views/EnEView.vue";
import SkillView from "@/views/SkillView.vue";
import WorkView from "@/views/WorkView.vue";
import SpecialView from "@/views/SpecialExperience.vue";

export default defineComponent({
  components: {
    HomeView,
    AboutView,
    Waypoint,
    EnEView,
    SkillView,
    WorkView,
    SpecialView: SpecialView,
  },
  data() {
    return {
      isTop: true,
      navLists: [
        {
          name: "About ",
          path: "#about",
        },
        {
          name: "Experience & Education ",
          path: "#experienceAndEdu",
        },
        {
          name: "Skill ",
          path: "#skill",
        },
        {
          name: "Works ",
          path: "#works",
        },
        {
          name: "Special Experience ",
          path: "#specialExperience",
        },
        {
          name: "Download My Resume ",
          path: "https://www.cake.me/pdf/s--HtdiPqmbf5R9wpHJEWKUwA--/72Xw1Z.pdf",
        },
      ],
    };
  },
  methods: {
    onchange(state: any) {
      console.log(state.going);
      if (state.going == "IN") {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    setLang() {
      let currentLang = localStorage.getItem("set-lang");
      localStorage.setItem("set-lang", currentLang == "tw" ? "en" : "tw");
      location.reload();
    },
  },
});
</script>
<style lang="sass">
#app
  font-family: 'Roboto Mono', monospace, Nunito,Noto Sans TC,sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #213d23
.navbar-light
  color: #213d23
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
.menu-icon
  border: none !important
.bg-light-green
  background-color: #d8ddd4
p
  color: #666
.lang-text
  color: #222
@media (max-width: 992px)
  .collapse
    background: rgb(0 0 0 / 70%)
    li
      color: #ddd
</style>
