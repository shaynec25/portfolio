<template lang="pug">
.card
  .card-body.py-3
    h6.card-title {{title}}
    a(:href="link" target="_blank")
      img.img-fluid(v-if="img" :src="img")

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
  min-height: 230px
  .card-title
    color: #446647
.card:hover
  transform: scale(1.1)
  transition: all 0.5s ease 0s
  .card-title
    color: #213d23
.certi
  object-fit: cover
  height: 100%
</style>
