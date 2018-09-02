<template>
  <div class="container clearfix">
    <h1><Icon type="android-apps"></Icon>{{rightList.name}}</h1>
    <ul class="clearfix liiter-head" v-for="(item,index) in rightList" :key="index">
      <li class="head-wrap">
        <div class="head" @click="toggle(index)"><Icon type="plus-round"></Icon>{{item.name}}</div>
        <ul class="tow-head" v-if="item.show">
          <li v-for="i in item.importDetails" class="head-wrap">
            <router-link :to="{path:'/'+ shengfen +'/partlist',query:{name:i.name,type:type}}"><Icon type="plus-round"></Icon>{{i.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "v-export-right",
    data() {
      return {
        shengfen:'',
        type:'1',
        isActive:0,
        rightList: []
      };
    },
    methods: {
      getArticl: function () {
        var that =this;
        this.$axios({
          method: 'get',
          url: '/api/getDepartment',
        })
          .then(
            function (res) {
              // console.log(res.data.data);
              res.data.data.name = '专家介绍';
              res.data.data.map(function (item) {
                item.show = false;
              });
              res.data.data[0].show=true;
              that.rightList = res.data.data;
            }
          )
      },
      toggle:function (index) {
        this.rightList[index].show =!this.rightList[index].show;
      }
    },
    watch:{
      '$route':function () {
        var that = this;
        var shengfen = window.location.pathname.split('/')[1];
        this.shengfen = shengfen;
        // console.log(this.shengfen);
        if(shengfen==='zhuanjia'){
          this.type ='1';
          that.rightList.name = '专家介绍';
        }else if (shengfen==='yisheng'){
          this.type ='2';
          that.rightList.name = '医生介绍';
        }else if (shengfen==='hushi'){
          this.type ='3';
          that.rightList.name = '护士介绍';
        }
      }
    },
    created() {
      var that = this;
      this.getArticl();
      // console.log(window.location.pathname.split('/')[1])
      var shengfen = window.location.pathname.split('/')[1];
      this.shengfen = shengfen;
      // console.log(this.shengfen)
      if(shengfen==='zhuanjia'){
        this.type ='1';
        that.rightList.name = '专家介绍';
      }else if (shengfen==='yisheng'){
        this.type ='2';
        that.rightList.name = '医生介绍';
      }else if (shengfen==='hushi'){
        this.type ='3';
        that.rightList.name = '护士介绍';
      }
      // console.log(this.type)
    },
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
    .liiter-head{
      list-style: none;
      //border: 1px dashed @light;
      border-left: 1px dashed @light;
      border-right: 1px dashed @light;
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
          border-bottom: 2px solid @shadow;
          border-top: 2px solid @shadow;
          background-image: url("../../assets/headBg.jpg");
          color: @primary;
          cursor: pointer;
          box-shadow: 0px -5px 15px @shadow inset;
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
          display: block;
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

