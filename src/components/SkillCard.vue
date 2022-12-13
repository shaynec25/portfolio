<template lang="pug">
.card
  .card-body.py-3
    h4.card-title {{title}}
    p -
    h6.card-subTitle {{subTitle}}
    small.card-text.text-muted
      ul.no-bullets
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
</style>
