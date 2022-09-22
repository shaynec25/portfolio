<template lang="pug">
#home.vh-100.position-relative
  img(src="https://picsum.photos/id/1011/1100/600").h-100
  .m-5.position-absolute.top-50.start-0.w-100.text-light
    h1 Hi! I'm Shayne.
    AutoTyperVue(componentTag="h3" :text="typeText")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import AboutView from "@/views/AboutView.vue";
import { AutoTyperVue } from "auto-typer-vue3";
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    AboutView,
    AutoTyperVue,
  },
  data() {
    return {
      typeText: ["a Developer,", "a Traveller,", "A Cat Lover."],
    };
  },
});
</script>
<style lang="sass" scoped>
@import "auto-typer-vue3/dist/style.css"
.pic-filter
  background-color: rgba(255, 255, 255, 0.4)
</style>
