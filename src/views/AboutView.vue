<template lang="pug">
.wrapContainer
  #about.p-3.container
    .row.py-5
      .col-12.col-md-6.text-start
        h1 {{ $t("SECTION_TITLE.ABOUT")}}
        h3 Shayne Chang / 張雅琄
        p {{ $t('ABOUTS[0]') }}
        p {{ $t('ABOUTS[1]') }}
        p {{ $t('ABOUTS[2]') }}
        p {{ $t('ABOUTS[3]') }}
        p {{ $t('ABOUTS[4]') }}
        div.mt-4
          svg(style='width:24px;height:24px' viewbox='0 0 24 24') 
            path(fill='currentColor' d='M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z')
          |  +886-975-769-025
        div
          svg(style='width:24px;height:24px' viewbox='0 0 24 24')
            path(fill='currentColor' d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z')
          |  shayne.c0205@gmail.com
      .col-md-6
</template>
<script lang="ts">
export default {
  name: "TimeLine",
  data() {
    return {
      aboutItems: [],
    };
  },
};
</script>

<style lang="sass" scoped>
p
  margin: 0
  color: #666
.wrapContainer
  padding: 40px
</style>
