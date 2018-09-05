<template>
  <div class="department">
    <div class="department-head">
      <h2>科室介绍</h2>
      <span><router-link :to="{path:'/keshi/list'}">所有科室 >></router-link></span>
    </div>
    <div class="department-content">
      <div class="department-wrap clearfix" v-for="item in departments">
        <a :href="item.href" class="clearfix"><h1>{{item.name}}</h1></a>
        <div class="content-wrap">
          <span v-for="i in item.importDetails">
          <router-link :to="{path:'/keshi/class',query:{name:i.name}}"><Icon type="plus-round"></Icon> {{i.name}}</router-link>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-department",
    data() {
      return {
        departments: [
          {
            name: '',
            href: 'javascript:;',
            importDetails: [
            ]
          },
          {
            name: '',
            importDetails: [
              
            ]
          },
          {
            name: '',
            importDetails: [
              
            ]
          }
        ]
      }
    },
    methods:{
      getArticl: function () {
        var that =this;
        this.$axios({
          method: 'get',
          url: '/api/getDepartment',
        })
          .then(
            function (res) {
              // console.log(res.data.data);
              res.data.data.name = '科室介绍';
              res.data.data.map(function (item) {
                item.show = false;
              });
              res.data.data[0].show=true;
              that.departments = res.data.data;
            }
          )
      }
    },
    created(){
      this.getArticl();
    }
  }
</script>

<style lang="less" scoped>
  @shadow:#d7dde4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @content:#657180;
  @sbg: #ffefeb;
  @dark: #2b85e4;
  @border:#dddee1;
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .department {
    width: 1000px;
    margin: 18px auto;
    min-height: 190px;
    .department-head {
      width: 100%;
      height: 38px;
      border-bottom: 1px solid @light;
      line-height: 38px;
      background-image: url("../../assets/headBg.jpg");
      box-shadow: 5px -5px 30px @shadow inset;
      h2{
        padding: 0 30px 0 10px;
        float: left;
        font-size: 20px;
        height: 38px;
        box-sizing: content-box;
        color: @bgc;
        background: @primary;
        position: relative;
        box-shadow: 0 -5px 8px @light inset;
        &::after{
          position: absolute;
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          left: 120px;
          border-left: 38px solid @light;
          border-top: 38px solid transparent;
          box-shadow: 0 -5px 8px @light inset;

        }
      }
      span {
        display: block;
        float: right;
        padding-right: 20px;
        a {
          color: @content;
          &:hover{
            color: red;
          }
        }
      }
    }
    .department-content {
      width: 100%;
      min-height: 160px;
      margin-top: 5px;
      padding-bottom: 5px;
      .department-wrap {
        width: 100%;
        margin: 0 auto;
        min-height: 60px;
        border: 1px dashed @light;
        margin-top: 5px;
        border-radius: 5px;
        background: #fff;
        &>a{
          display: block;
          width: 120px;
          height: 100%;
          float: left;
          margin-top: 20px;
          h1 {
            width: 100%;
            display: block;
            float: left;
            text-align: center;
            font-size: 20px;
            vertical-align: middle;
            color: red;
            &:hover{
              color: @primary;
            }
          }
        }
        .content-wrap {
          width: 85%;
          float: right;
          padding: 10px;
          a {
            display: block;
            margin: 5px;
            padding: 1px 5px;
            float: left;
            border-radius: 3px;
            color: @content;
            i{
              color: red;
            }
            &:hover {
              background: @light;
              color: @bgc;
              i{
                color: red;
              }
            }
            &:active {
              background: @primary;
            }
          }
        }
      }

    }

  }
</style>
