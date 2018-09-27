<template>
  <div class="container clearfix">
    <div class="leaderHead">
      <span>{{articl.name}}</span>
      <span>{{articl.position}}</span>
    </div>
    <div class="leaderList">
        <div class="leader-img clearfix">
          <img :src="articl.src" alt="">
        </div>
      <div class="line"></div>
      <p v-html="articl.detail"></p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "vleader-detail",
      data(){
        return{
          articl:{}
        }
      },
      methods:{
        getArticl:function (id) {
          var that = this;
          var params = new URLSearchParams();
          params.append('query', JSON.stringify({_id:id}));
          params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
          params.append('collection', 'leadership');
          this.$axios({
            method: 'post',
            url:'/api/select',
            data:params
          })
            .then(
              function (res) {
                var n = /[\n]+/g;
                var space =  /\s/g;
                res.data.data.detail= res.data.data.detail.replace(n,'<br/>');
                res.data.data.detail= res.data.data.detail.replace(space,'&nbsp;');
                that.articl = res.data.data;
                //http://localhost:8088/tmp/7e79fc29925d3eb939922c95c3b42955.jpeg
                that.articl.src = that.articl.src.replace("wwwroot","http://localhost:8088")
                // console.log(that.articl.src)
              }
            )
            .catch()
        }
      },
      created(){
        var id = window.location.search.replace('?id=','');
        this.getArticl(id);
      }

    }
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
  @orange: #ffd362;
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .container {
    width: 100%;
    padding: 15px 30px 50px 30px;
    border: 2px solid @shadow;
    .leaderHead {
      font-size: 22px;
      text-align: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid red;
      vertical-align: bottom;
      padding-top: 38px;
      color: red;
      span{
        font-size: 18px;
        &:last-child{
          color: @content;
        }
      }
    }
    .leaderList {
      width: 100%;
      overflow: hidden;
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
