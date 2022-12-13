<template lang="pug">
#experienceAndEdu
    img.w-100(src="https://picsum.photos/1100/300")
    .p-3.container
        .row.py-5.text-start
            .col-12.col-md-6.p-1
                h1 {{ $t("SECTION_TITLE.EX") }}
                Timeline
                    TimelineItem.fs-6(v-for="experience in $tm('EXS')") {{experience.TIME}}
                        TimeLineCard(:title="experience.JOB_TITLE" :sub-title="experience.COMPANY" :des="experience.DESCRIPTIONS")
            .col-12.col-md-6.p-1
                h1 {{ $t("SECTION_TITLE.EDU") }}
                Timeline
                    TimelineItem.fs-6(v-for="education in $tm('EDUS')") {{education.TIME}}
                        TimeLineCard(:title="education.DEPARTMENT" :sub-title="education.SCHOOL" :des="education.DESCRIPTIONS")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Timeline, TimelineTitle, TimelineItem } from "vue3-timeline";
import TimeLineCard from "../components/TimeLineCard.vue";
export default defineComponent({
  components: { Timeline, TimelineTitle, TimelineItem, TimeLineCard },
  data() {
    return {};
  },
});
</script>
