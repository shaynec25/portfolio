<template lang="pug">
#home
  HelloWorld
  HelloWorld
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
