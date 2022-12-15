<template lang="pug">
div.row
  .col-12(:class="[img? 'col-md-6' : '']")
    p.fs-4 {{title}}
    p.fs-6 {{subTitle}}
    ul
      li(v-for="des in des") {{des}}
  .col-12.col-md-6(v-if="img")
    img(:src="require(`@/assets/img/${img}`)").img-fluid
    p {{ imgDes }}
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
    img: String,
    imgDes: String,
  },
});
</script>

<style lang="sass">
.no-bullets
  list-style-type: none
  padding: 0
</style>
