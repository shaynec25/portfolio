<template lang="pug">
VerticalTimeline(:inputData="mockData" :reversed="false")
</template>
<script lang="ts">
import mockData from "@/assets/jsons/timeline.json";
export default {
  name: "TimeLine",
  data() {
    return {};
  },
};
</script>
