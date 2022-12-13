<template lang="pug">
.card.overflow-hidden
  img(:src="img")
  .card-img-overlay.p-0
    .card-info
      h4.card-title.pt-2 {{title}}
      p.card-subTitle.text-start.m-3 {{des}}
      .card-text.d-flex.justify-content-evenly.mt-3
        a(v-if="view" :href="view" target="_blank").btn.btn-secondary View
        a(v-if="code" :href="code" target="_blank").btn.btn-secondary Code

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    title: String,
    img: String,
    des: Array,
    view: String,
    code: String,
  },
});
</script>

<style lang="sass" scoped>
.no-bullets
  list-style-type: none
  padding: 0
.card
  height: 300px
  .card-title
    color: #446647
.card-info
  height: 300px
  background-color: rgb(255 255 255 / 70%)
  position: relative
  top: 250px
  .card-title
    height: 50px
    background-color: #213d23
    color: #fff

.card:hover
  .card-info
    top: 50px
    transition: all 0.5s ease 0s
</style>
