<template lang="pug">
#skill.bg-light-green
  .container
    .row.py-5.p-3
      h1 {{ $t("SECTION_TITLE.SKILL")}}
      div(v-for="skill in $tm('SKILLS')").col-12.col-md-4.my-3
        SkillCard(:title="skill.TITLE" :subTitle="skill.SUBTITLE" :des="skill.DESCRIPTIONS")

</template>
<script lang="ts">
import { defineComponent } from "vue";
import SkillCard from "../components/SkillCard.vue";
export default defineComponent({
  components: { SkillCard },
  data() {
    return {
      skills: [
        {
          title: "Frontend",
          subTitle: "Vue, Flutter, Swift, Kotlin, JS",
          des: [
            "使用Vue + Bootstrap搭配JS製作可互動網頁",
            "串接API取得或寫入資料",
            "使用Flutter開發多平台應用程式",
            "使用Swift開發iOS App",
            "學習使用Kotlin製作Android App",
          ],
        },
        {
          title: "Backend & Data",
          subTitle: "Python, MySQL",
          des: [
            "Palantir平台上使用python及SQL語法進行資料處理及驗證",
            "學習使用Vapor建置Server-side DB",
            "設定RESTful API",
            "學習GraphQL",
          ],
        },
        {
          title: "Others",
          subTitle: "Figma, Git, Photoshop, Illustrator",
          des: [
            "使用Git進行版本控管與合作開發",
            "使用Figma製作UI及prototype",
            "使用PS進行影像處理、去背等",
            "使用AI繪製向量圖檔等",
            "學習撰寫技術文件",
          ],
        },
      ],
    };
  },
});
</script>
