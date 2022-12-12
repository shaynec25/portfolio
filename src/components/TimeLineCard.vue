<template lang="pug">
div
  p.fs-4 {{title}}
  p.fs-6 {{subTitle}}
  ul.no-bullets
    li(v-for="des in des") {{des}}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimeLineCard",
  props: {
    time: String,
    title: String,
    subTitle: String,
    des: Array,
    foot: String,
  },
});
</script>

<style lang="sass">
.no-bullets
  list-style-type: none
  padding: 0
</style>
