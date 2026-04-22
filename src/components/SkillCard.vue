<template lang="pug">
.card
  .card-body.py-3
    h4.card-title {{title}}
    h6.card-subTitle(v-if="subTitle") {{subTitle}}
    small.card-text.text-muted
      ul.skill-list
        li(v-for="des in des") {{des}}

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
.card
  width: 100%
  min-height: 330px
  .card-title
    color: #446647
.card:hover
  transform: scale(1.1)
  transition: all 0.5s ease 0s
  .card-title
    color: #213d23
.skill-list
  list-style-type: disc
  padding-left: 1.2rem
  text-align: left
  li
    padding: 0.2rem 0
</style>
