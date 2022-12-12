<template lang="pug">
div
  p.fs-4 {{title}}
  p.fs-6 {{subTitle}}
  p(style="white-space: pre").fs-6 {{des}}
  .fs-6 {{foot}}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimeLineCard",
  props: {
    time: String,
    title: String,
    subTitle: String,
    des: String,
    foot: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
