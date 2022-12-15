<template lang="pug">
#specailExperience
    img.w-100(src="../assets/au_qld.jpg")
    .p-3.container
        .row.py-5.text-start
            .col-12.p-1
                h1 {{ $t("SECTION_TITLE.SE") }}
                Timeline
                    TimelineItem.fs-6(v-for="experience in $tm('SE')") {{experience.TIME}}
                        TimeLineCard(:title="experience.TITLE" :sub-title="experience.LOCATION" :des="experience.DESCRIPTIONS" :img="experience.IMG" :imgDes="experience.IMG_DES")
    .bg-light-green.footer
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Timeline, TimelineTitle, TimelineItem } from "vue3-timeline";
import TimeLineCard from "../components/TimeLineCard.vue";
export default defineComponent({
  components: { Timeline, TimelineTitle, TimelineItem, TimeLineCard },
});
</script>
<style lang="sass" scoped>
.footer
    height: 100px
</style>
