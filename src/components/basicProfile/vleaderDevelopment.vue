<template>
  <div class="leaderdepartmentContainer clearfix">
    <div class="leaderHead">
      <!--<span>{{articl.name}}</span>-->
      <!--<span>{{articl.position}}</span>-->
      <span>{{articl.title}}</span>
    </div>
    <div class="leaderList">
        <div v-show="articl.src" class="leader-img clearfix">
          <img src="../../assets/logo.png" alt="">
        </div>
      <div v-show="articl.src" class="line"></div>
      <p v-html="articl.content"></p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "vleader-speech",
      data(){
        return{
          articl:{}
        }
      },
      methods:{
        getArticl:function () {
          var that = this;
          var params = new URLSearchParams();
          params.append('query', JSON.stringify({title:"发展历程"}));
          params.append('projection', JSON.stringify({"projection": {}}));
          params.append('collection', 'special');
          this.$axios({
            method: 'post',
            url:'/api/select',
            data:params
          })
            .then(
              function (res) {
                // 过滤空格和字符串
                // var n = /[\n]+/g;
                // var space =  /\s/g;
                // res.data.data.content= res.data.data.content.replace(n,'<br/>');
                // res.data.data.content= res.data.data.content.replace(space,'&nbsp;');
                that.articl = res.data.data;
              }
            )
            .catch()
        }
      },
      created(){
        this.getArticl();
      }

    }
</script>

<style lang="less">
  @content: #657180;
  @text: #464c5b;
  @disable: #464c5b;
  @sub: #9ea7b4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @shadow: #e3e8ee;
  @orange: #ffd362;
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .leaderdepartmentContainer {
    width: 100%;
    padding: 15px 30px 50px 30px;
    border: 2px solid @shadow;
    .leaderHead {
      font-size: 22px;
      text-align: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid red;
      padding-bottom: 30px;
      vertical-align: bottom;
      padding-top: 38px;
      color: red;
      span{
        font-size: 22px;
        &:last-child{
          color: red;
        }
      }
    }
    .leaderList {
      width: 100%;
      .leader-img{
        width: 142px;
        height: 206px;
        margin: 0 auto;
        margin-top: 20px;
        img{
          width: 142px;
          height: 206px;
          border: 3px solid @shadow;
          &:hover{
            box-shadow: 5px 5px 8px @shadow ;
          }
        }
      }
      .line{
        width: 100%;
        border-bottom: 1px solid @shadow;
        box-shadow: 2px 2px 2px @shadow ;
        margin: 20px auto;
      }
      p{
        margin-top: 30px;
        font-size: 16px;
        color: @content;
        img{
          max-width: 100%;
        }
      }

    }
    .page {
    }

  }
</style>
