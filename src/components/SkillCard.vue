<template lang="pug">
.card
  .card-body.py-3
    h4.card-title {{title}}
    p(v-if="subTitle") -
    h6.card-subTitle(v-if="subTitle") {{subTitle}}
    small.card-text.text-muted
      ul.no-bullets
        li(v-for="des in des") {{des}}
    a(:href="link" target="_blank")
      img(v-if="img" :src="img")

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillCard",
  props: {
    title: String,
    subTitle: String,
    des: Array,
    img: String,
    link: String,
  },
});
</script>

<style lang="sass" scoped>
.no-bullets
  list-style-type: none
  padding: 0
.card
  min-height: 330px
  .card-title
    color: #446647
.card:hover
  transform: scale(1.1)
  transition: all 0.5s ease 0s
  .card-title
    color: #213d23
img
  object-fit: scale-down
  height: 100%
</style>
