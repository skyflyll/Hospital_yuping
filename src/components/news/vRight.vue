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
  name: "v-n-right",
  props:{navIndex:Number},
  data() {
    return {
      rightList:
        {
          name: "新闻中心",
          list: [
            {
              url: "/news/list?table=announcement&type=2",
              name: "医院动态"
            },
            {
              url: "/news/list?table=announcement&type=3",
              name: "人才招聘"
            },
            {
              url: "/news/list?table=announcement&type=1",
              name: "新闻公告"
            },
            {
              url: "/news/list?table=announcement&type=4",
              name: "医疗设备"
            },
            {
              url: "/news/list?table=announcement&type=5",
              name: "新技术、项目"
            },{
              url: "/news/list?table=announcement&type=6",
              name: "政策法规"
            },
            {
              url: "/news/list?table=announcement&type=7",
              name: "建党园地"
            },{
              url: "/news/list?table=announcement&type=8",
              name: "医院荣誉"
            },
            {
              url: "/news/list?table=announcement&type=11",
              name: "健康讲座"
            },{
              url: "/news/list?table=announcement&type=9",
              name: "职工之家"
            },{
              url: "/news/list?table=announcement&type=10",
              name: "患者心声"
            }
            ]
        }
    }
  },
  watch:{
    '$route': function () {
      // var serch = this.urlArgs(window.location.search);
      // this.getArticl(serch.id, serch.table);
      // console.log($router)
      // this.router.go(window.location)

    }
  },
  created() {
    // this.rightList =this.rightList;
    // console.log(leftData[this.navIndex])
    // console.log(this.rightList)
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

