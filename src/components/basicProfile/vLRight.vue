<template>
  <div class="container clearfix">
      <h1><Icon type="android-apps"></Icon>{{rightList.name}}</h1>
      <ul class="clearfix">
          <li v-for="(item,index) in rightList.list" :key="index">
            <router-link :to="{path:item.url}"><Icon type="plus-round"></Icon>{{item.name}}</router-link>
          </li>

      </ul>
  </div>
</template>
<script>
  import leftData from "../part/navList.json"
export default {
  name: "v-l-right",
  props:{navIndex:Number},
  data() {
    return {
      rightList: []
    };
  },
  created() {
    this.rightList =leftData[this.navIndex];
    // console.log(leftData[this.navIndex])
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
  width: 220px;
  min-height: 100px;
  h1 {
    width: 220px;
    height: 38px;
    font-size: 20px;
    background: #2d8cf0;
    padding-left: 10px;
    line-height: 38px;
    color: #f8f8f9;
    i{
      padding-right: 10px;
      font-size: 18px;
    }
  }
  ul{
    list-style: none;
    border: 1px dashed @light;
    border-top:0;
    li{
      height: 45px;
      line-height: 45px;
      width: 218px;
      display: block;
      text-align: left;
      padding-left: 20px;
      border-bottom: 1px solid @bgc;
      background-image: url("../../assets/headBg.jpg");
      &:hover{
        border-bottom: 1px solid @shadow;
        box-shadow: 0 -2px 8px @shadow inset;
      }
      a{
        display: block;
        color: @content;
        i{
          font-size: 14px;
          margin-right: 10px;
          color: red;
        }
        &:hover{
          color: red;
        }
        &:active{
        }
      }
    }
  }
}
</style>

