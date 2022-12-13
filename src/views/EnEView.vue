<template lang="pug">
#experienceAndEdu
    img.w-100(src="https://picsum.photos/1100/300")
    .p-3.container
        .row.py-5.text-start
            .col-12.col-md-6.p-1
                h1 Experience
                Timeline
                    TimelineItem.fs-6(v-for="experience in experiences") {{experience.time}}
                        TimeLineCard(:title="experience.jobTitle" :sub-title="experience.company" :des="experience.description")
            .col-12.col-md-6.p-1
                h1 Education
                Timeline
                    TimelineItem.fs-6(v-for="education in education") {{education.time}}
                        TimeLineCard(:title="education.department" :sub-title="education.school" :des="education.description")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Timeline, TimelineTitle, TimelineItem } from "vue3-timeline";
import TimeLineCard from "../components/TimeLineCard.vue";
export default defineComponent({
  components: { Timeline, TimelineTitle, TimelineItem, TimeLineCard },
  data() {
    return {
      experiences: [
        {
          time: "2020 Dec - Now",
          jobTitle: "軟體開發工程師",
          company: "友教有限公司",
          description: [
            "使用VUE+Bootstrap開發網頁",
            "使用Flutter開發多平台應用程式",
            "使用Swift開發iOS手機APP",
            "使用Python + SQL進行資料處理",
            "教導國小學童學習程式語言",
            "與後端工程師配合，使用RESTful API",
            "與客戶PM配合",
          ],
        },
        {
          time: "2020 Feb - 2020 Dec",
          jobTitle: "Bar Manager",
          company: "二十三號藝文、啤研所股份有限公司",
          description: [
            "擔任全台最大中英文站立喜劇酒吧店經理",
            "制定店內各項標準作業流程",
            "訓練員工及排班",
            "控管進貨及調整菜單",
            "與活動企劃討論安排活動",
          ],
        },
        {
          time: "2017 May - 2019 Dec",
          jobTitle: "合夥人與實際經營者",
          company: "台北市知名加盟手搖飲料店 x 3",
          description: [
            "加盟知名手搖飲料店，評估人流決定地點",
            "制定店內各項標準作業流程",
            "雇用、訓練員工及排班",
            "控管進出貨",
            "開發、維護客源",
            "三家店居為該品牌當時全台月營業額前十",
          ],
        },
        {
          time: "2016 Apr - 2017 Apr",
          jobTitle: "CPO銀行專員",
          company: "花旗商業銀行",
          description: [
            "銀行電話專員，負責語音協助顧客進行各項交易",
            "為該批新進訓練人員中綜合KPI第一",
          ],
        },
        {
          time: "2013 Jan - 2014 Sep",
          jobTitle: "專案執行人員",
          company: "長庚醫療財團法人林口長庚總院",
          description: [
            "執行衛福部與醫院合作專案",
            "業務單位接洽、安排差旅",
            "規劃專案時程",
            "專案數據與進度彙整、撰寫結案報告等",
          ],
        },
      ],
      education: [
        {
          time: "2008 Sep - 2012 Jun",
          department: "多媒體設計系",
          school: "國立虎尾科技大學",
          description: ["網頁設計、平面設計、動畫設計、電腦程式語法"],
        },
      ],
    };
  },
});
</script>
