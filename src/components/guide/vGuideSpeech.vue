<template>
  <div class="v-GuideSpeechContainer clearfix">
    <div class="leaderHead">
      <span>{{articl.title}}</span>
    </div>
    <div class="leaderList">
        <!--<div class="leader-img clearfix">-->
          <!--<img :src="articl.src" alt="">-->
        <!--</div>-->
      <!--<div class="line" v-if="articl.src"></div>-->
      <p v-html="articl.content"></p>

    </div>
  </div>
</template>

<script>

    export default {
      name: "v-guide-speech",
      data(){
        return{
          title:'',
          articl:{}
        }
      },
      methods:{
        getArticl:function (title) {
          var that = this;
          var params = new URLSearchParams();
          params.append('query', JSON.stringify({title:title}));
          params.append('projection', JSON.stringify({"projection": {}}));
          params.append('collection', 'special');
          this.$axios({
            method: 'post',
            url:'/api/select',
            data:params
          })
            .then(
              function (res) {
                // console.log(res);
                that.articl = res.data.data;
              }
            )
            .catch()
        }
      },
      watch:{
        '$route':function () {
          var name = decodeURI(window.location.search,"UTF-8");
          name = name.replace("?name=","");
          // console.log(name);
          if(name ==''){
            name = '住院须知'
          }
          this.title = name;
          this.getArticl(this.title);
        }
      },
      created(){
        var name = decodeURI(window.location.search,"UTF-8");
            name = name.replace("?name=","");
            // console.log(name);
            if(name ==''){
              name = '住院须知'
            }
            this.title = name;
        this.getArticl(this.title);
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
  .v-GuideSpeechContainer {
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
      overflow: hidden;
      .leader-img{
        width: 100%;
        /*height: 206px;*/
        margin: 0 auto;
        margin-top: 20px;
        img{
          width: 100%;
          /*height: 206px;*/
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
