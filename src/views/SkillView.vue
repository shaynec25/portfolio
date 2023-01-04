<template lang="pug">
#skill.bg-light-green
  .container
    .row.py-5.p-3
      h1 {{ $t("SECTION_TITLE.SKILL")}}
      div(v-for="skill in $tm('SKILLS')").col-12.col-md-4.my-3
        SkillCard(:title="skill.TITLE" :subTitle="skill.SUBTITLE" :des="skill.DESCRIPTIONS")
    .row.pb-5.p-3
      h1 {{ $t("SECTION_TITLE.CERTI")}}
      div(v-for="certi in $tm('CERTIS')").col-6.col-md-3.my-3
        CertiCard(:title="certi.TITLE" :img="certi.IMG" :link="certi.LINK")

</template>
<script lang="ts">
import { defineComponent } from "vue";
import SkillCard from "../components/SkillCard.vue";
import CertiCard from "../components/CertiCard.vue";
export default defineComponent({
  components: { SkillCard, CertiCard },
});
</script>
