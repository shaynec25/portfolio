<template lang="pug">
#experienceAndEdu
    img.w-100(src="https://picsum.photos/1100/300")
    .p-3.container
        .row.py-5.text-start
            .col.p-3
                h1 Experience
     
            .col.p-3
                h1 Education
        TimeLine
</template>
<script lang="ts">
// import { defineComponent } from 'vue'
import TimeLine from "@/components/TimeLine.vue";
export default {
  components: {
    TimeLine,
  },
};
</script>

<style lang="sass" scoped>
p
  margin: 0
  color: #666
</style>
