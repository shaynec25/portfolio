<template lang="pug">
#home.vh-100.position-relative
  img(src="https://picsum.photos/id/1011/1100/600").h-100.w-100
  .position-absolute.top-50.start-0.w-100.text-light
    h1 Hi! I'm Shayne Chang.
    AutoTyperVue(componentTag="h3" :text="typeText")
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
        "I am a...",
        "Front-end Developer,",
        "Traveler,",
        "Cat Lover.",
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
