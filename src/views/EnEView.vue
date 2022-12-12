<template lang="pug">
#experienceAndEdu
    img.w-100(src="https://picsum.photos/1100/300")
    .p-3.container
        .row.py-5.text-start
            .col.p-3
                h1 Experience
                Timeline
                    TimelineItem.fs-6(v-for="experience in experiences") {{experience.time}}
                        TimeLineCard(:title="experience.jobTitle" :sub-title="experience.company" :des="experience.description")
            .col.p-3
                h1 Education
<<<<<<< HEAD
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
=======
                Timeline
                    TimelineItem.fs-6(v-for="experience in experiences") {{experience.time}}
                        TimeLineCard(:title="experience.jobTitle" :sub-title="experience.company" :des="experience.description")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Timeline, TimelineTitle, TimelineItem } from "vue3-timeline";
import TimeLineCard from "../components/TimeLineCard.vue";
export default defineComponent({
  data() {
    return {
      experiences: [
        {
          time: "2020 Dec - Now",
          jobTitle: "軟體開發工程師",
          company: "友教有限公司",
          description:
            "網頁、APP開發、資料處理。\n使用語言及框架: VUE、Flutter、Swift、Python、SQL等",
        },
        {
          time: "2020 Dec - Now",
          jobTitle: "軟體開發工程師",
          company: "友教有限公司",
          description:
            "網頁、APP開發、資料處理。\n使用語言及框架: VUE、Flutter、Swift、Python、SQL等",
        },
      ],
    };
  },
  components: { Timeline, TimelineTitle, TimelineItem, TimeLineCard },
});
</script>
>>>>>>> 58c911d6eff9d147415cd399dd95979c05fcb689
