<template lang="pug">
#home.vh-100.position-relative
  img(src="../assets/home.jpg").h-100.w-100.d-none.d-lg-block
  img(src="../assets/home_m.jpg").h-100.w-100.d-lg-none
  .position-absolute.top-50.start-0.w-100.text-light
    h1 Hi! I'm Shayne Chang.
    AutoTyperVue(componentTag="h3" :text="typeText" typingDelay="100" deletingDelay="50")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AutoTyperVue } from "auto-typer-vue3";
export default defineComponent({
  name: "HomeView",
  components: {
    AutoTyperVue,
  },
  data() {
    return {
      typeText: [
        "I am...",
        "a Flutter Developer,",
        "a Traveler,",
        "a Cat Lover,",
        "and more...",
      ],
    };
  },
});
</script>
<style lang="sass" scoped>
@import "auto-typer-vue3/dist/style.css"
.pic-filter
  background-color: rgba(255, 255, 255, 0.4)
</style>
