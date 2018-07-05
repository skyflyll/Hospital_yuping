<template>
  <div class="container clearfix">
    <div class="left">
      <router-view/>
    </div>
    <div class="right">
      <v-d-right :navIndex="2"></v-d-right>
    </div>
  </div>
</template>
<script>
import vDRight from "./department/vDRight";
export default {
  name: "v-basic-profile",
  components: {
    vDRight
  }
};
</script>

<style lang="less" scoped>
  @content: #657180;
  @text: #464c5b;
  @disable: #464c5b;
  @sub: #9ea7b4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @shadow: #e3e8ee;
  .clearfix::after{
  content: '';
  display: block;
  clear: both;
}
.container {
  width: 1000px;
  margin: 0 auto;
  min-height: 500px;
  padding:15px 0;
  .left{
    width: 720px;
    min-height: 500px;
    float: left;
  }
  .right{
    width: 220px;
    min-height: 100px;
    float: right;
  }
}
</style>
