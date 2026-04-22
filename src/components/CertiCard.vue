<template lang="pug">
.card
  .card-body.py-3
    h6.card-title {{title}}
    a(:href="link" target="_blank")
      img.img-fluid(v-if="img" :src="img")
    ul.lang-list(v-if="items && items.length")
      li(v-for="item in items") {{item}}

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CertiCard",
  props: {
    title: String,
    subTitle: String,
    des: Array,
    items: Array,
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
  width: 100%
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
.lang-list
  list-style-type: disc
  padding-left: 1.2rem
  margin-top: 0.8rem
  text-align: left
  li
    font-size: 0.95rem
    color: #446647
    padding: 0.2rem 0
</style>
