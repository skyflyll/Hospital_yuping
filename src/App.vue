<template>
  <div id="app">
    <v-head></v-head>
    <v-nav></v-nav>
    <v-notice></v-notice>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHead from './components/part/vHead'
  import vNav from './components/part/vNav'
  import vFooter from './components/part/vFooter'
  import vNotice from './components/part/vNotice'

  export default {
    name: 'App',
    components: {
      'v-head': vHead,
      'v-nav': vNav,
      'v-footer': vFooter,
      'v-notice': vNotice
    }
  }
</script>

<style lang="less">
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @heightNav: 38px;
  @height: 178px;
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
  }

  #app {
  }
</style>
