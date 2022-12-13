<template lang="pug">
#work
  .container
    .row.py-5.p-3
      h1 {{ $t("SECTION_TITLE.WORK")}}
      div(v-for="work in $tm('WORKS')").col-12.col-md-4.my-3
        ProjectCard(:title="work.TITLE" :img="work.IMG" :des="work.DESCRIPTIONS" :view="work.VIEW" :code="work.CODE")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from "../components/ProjectsCard.vue";
export default defineComponent({
  components: { ProjectCard },
});
</script>
