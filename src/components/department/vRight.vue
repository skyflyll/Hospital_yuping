<template>
  <div class="container clearfix">
      <h1><Icon type="android-apps"></Icon>{{rightList.name}}</h1>
      <ul class="clearfix liiter-head" v-for="(item,index) in rightList.importantList" :key="index">
          <li class="head-wrap">
            <div class="head" @click="changeTab(index)"><Icon type="plus-round"></Icon>{{item.name}}</div>
            <transition  name="fade">
              <!--<div v-if="isActive===index">hhhhh</div>-->
            <ul class="tow-head"
                v-if="isActive===index"
                v-bind:class="{ active: isActive===index }">
                <li v-for="(i,index) in item.importDetails" :key="index" class="head-wrap">
                  <router-link :to="{path:'/keshi/class',query:{name:i.name}}"><Icon type="plus-round"></Icon>{{i.name}}</router-link>
                </li>
            </ul>
            </transition>
          </li>
      </ul>
  </div>
</template>
<script>
  import leftData from "../part/navList.json"
export default {
  name: "v-right",
  props:{navIndex:Number},
  data() {
    return {
      isActive:0,
      rightList: [
        {
          name: "测试测试",
          item: [
            {
              url: "/gaikuang/lindao",
              title: "哈哈哈哈或或或"
            },
            {
              url: "/gaikuang/",
              title: "哈哈哈哈或或或"
            },
            {
              url: "javascript:;",
              title: "哈哈哈哈或或或"
            },
            {
              url: "javascript:;",
              title: "哈哈哈哈或或或"
            },
            {
              url: "javascript:;",
              title: "哈哈哈哈或或或"
            },
            {
              url: "javascript:;",
              title: "哈哈哈哈或或或"
            },
            {
              url: "javascript:;",
              title: "哈哈哈哈或或或"
            }
          ]
        }
      ]
    };
  },
  methods:{
    changeTab:function (index) {
      this.isActive =index;
    }
  },
  created() {
    this.rightList =leftData[this.navIndex];
    console.log(this.rightList);
    console.log(leftData[this.navIndex])
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
.active{
  display: block !important;
}
.fade-enter-active, .fade-leave-active {
  transition: height 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /*opacity: 0;*/
  height: 0;
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
  .liiter-head{
    list-style: none;
    border: 1px dashed @light;
    border-top:0;
    .head-wrap{
      line-height: 45px;
      width: 218px;
      display: block;
      text-align: center;
      .head{
        font-size: 16px;
        text-align: left;
        height: 45px;
        width: 100%;
        padding-left: 10px;
        border-bottom: 1px solid @bgc;
        background-image: url("../../assets/headBg.jpg");
        color: @primary;
        cursor: pointer;
        i{
          padding-right: 5px;
          color: red;
        }
      }
      &:hover{
        border-bottom: 1px solid @shadow;
        box-shadow: 0 -2px 8px @shadow inset;
      }
      .tow-head{
        display: none;
        .head-wrap{
          text-align: left;
          padding-left: 15px;
          background-image: url("../../assets/headBg.jpg");
          height: 38px;
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
  }
}
</style>

