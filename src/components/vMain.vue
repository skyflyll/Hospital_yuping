<template>
  <div class="main">
    <!--<v-notice></v-notice>-->
    <v-swipt></v-swipt>
    <v-expert></v-expert>
    <v-news></v-news>
    <v-department></v-department>
    <v-information></v-information>
    <v-party-center></v-party-center>
    <v-honor></v-honor>
  </div>
</template>

<script>
  import vNews from './part/vNews'
  import vSwipt from './part/vSwipt'
  import vExpert from './part/vExpert'
  import vDepartment from './part/vDepartment'
  import vInformation from './part/vInformation'
  import vPartyCenter from './part/vPartyCenter'
  import vHonor from './part/vHonor'

  export default {
    name: "v-main",
    props: {},
    data() {
      return {
        value: '1'
      }
    },
    components: {
      // 'v-notice':vNotice,
      'v-honor':vHonor,
      'v-news': vNews,
      'v-swipt': vSwipt,
      'v-expert': vExpert,
      'v-department': vDepartment,
      'v-information': vInformation,
      'v-party-center': vPartyCenter,

    }
  }
</script>

<style lang="less" scoped>
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @heightNav: 38px;
  @height: 178px;
  .main {
    width: 1000px;
    margin: 5px auto;
    min-height: 2000px;
    .swipt {
      width: 1000px;
      height: 255px;
      background: @bgc;
    }
  }
</style>
