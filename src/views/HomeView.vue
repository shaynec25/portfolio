<template lang="pug">
#home
  img(src="https://picsum.photos/id/1011/1400/1200")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import AboutView from "@/views/AboutView.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    AboutView,
  },
});
</script>
<style lang="sass" scoped>
.pic-filter
  background-color: rgba(255, 255, 255, 0.4)
</style>
