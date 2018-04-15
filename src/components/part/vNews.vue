<template>
  <div class="news-center">
    <div class="news-wrap">
      <div class="news-head">
        <h1>医院动态</h1>
        <a href="javascript:;">更多 >></a>
      </div>
      <div class="news-content clearfix">
        <div class="content-wrap"
             v-for="(item,index) in newsCenter"
             :key="index">
          <a :href="item.href">
            <img :src="item.url" alt="img">
            <div class="details">
              <h2>{{item.name}}</h2>
              <p>{{item.details}}</p>
              <span>{{item.time}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="menu-wrap">
      <ul>
        <li v-for="item in menu"><a :href="item.href">{{item.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news-center",
    data(){
      return{
        menu:[
          {
            title:"安排门诊",
            href:"javascript:;"
          },{
            title:"预约挂号",
            href:"javascript:;"
          },{
            title:"网上答疑",
            href:"javascript:;"
          },{
            title:"政策法规",
            href:"javascript:;"
          },{
            title:"资料下载",
            href:"javascript:;"
          },{
            title:"院长信箱",
            href:"javascript:;"
          }
          ],
        newsCenter:[
          {
            name:'某某某动态信息',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'某某某动态信息某某某动态信息某某某动态信息某某某动态信息',
            time:'2018-03-15'
          },{
            name:'某某某动态信息',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'某某某动态信息某某某动态信息某某某动态信息某某某动态信息',
            time:'2018-03-15'
          },{
            name:'某某某动态信息',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'某某某动态信息某某某动态信息某某某动态信息某某某动态信息',
            time:'2018-03-15'
          },{
            name:'某某某动态信息',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'某某某动态信息某某某动态信息某某某动态信息某某某动态信息',
            time:'2018-03-15'
          },{
            name:'某某某动态信息',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'某某某动态信息某某某动态信息某某某动态信息某某某动态信息',
            time:'2018-03-15'
          },{
            name:'某某某动态信息',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'某某某动态信息某某某动态信息某某某动态信息某某某动态信息',
            time:'2018-03-15'
          }
          ]
      }
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
  @heightNav: 38px;
  @height: 178px;
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .news-center {
    width: 1000px;
    height: 370px;
    margin: 5px auto;
    //background: @bgc;
    .news-wrap{
      width: 795px;
      float: left;
      .news-head{
        height: 38px;
        width: 100%;
        box-sizing: border-box;
        line-height: 38px;
        background-image: url("../../assets/headBg.jpg");
        box-shadow: 5px -5px 30px @shadow inset;
        h1{
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
        a{
          width: 100px;
          height: 38px;
          display: block;
          float: right;
          text-align: center;
          color: @content;
          &:hover{
            color: red;
          }
        }
      }
      .news-content{
        width: 100%;
        border: 1px solid @light;
        padding: 7.5px 6px;
        .content-wrap{
          height: 95px;
          width: 385px;
          margin: 5px 0;
          box-sizing: border-box;
          //border: 1px dashed @bgc;
          float: left;
          border-radius: 5px;
          box-shadow: 3px 3px 3px @bgc;
          &:hover{
            box-shadow: 3px 3px 3px @shadow;
          }
          &:nth-child(2n){
            margin-left: 5px;
          }
          a{
            box-sizing: border-box;
            height: 95px;
            border: 0;
            padding: 0;
            img{
              display: block;
              vertical-align: middle;
              width: 110px;
              height: 95px;
              float: left;
              background: @bgc;
            }
            .details{
              overflow: hidden;
              padding-left: 5px;
              color: @content;
              h2{
                font-size: 16px;
                margin-top: 10px;
                margin-bottom: -5px;
                font-weight: 700;
                &:hover{
                  color: red;
                }
              }
              p{
                width: 90%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin: 5px 0;
                &:hover{
                  color: red;
                }
              }
              span{
                display: block;
                margin: 2px 0;
                &:hover{
                  color: red;
                }
              }
            }
          }
        }
      }
    }
    .menu-wrap{
      width: 190px;
      float: right;
      border:1px dashed @light;
      height: 370px;
      ul{
        list-style: none;
        li{
          box-sizing: border-box;
          width: 170px;
          height: 45px;
          line-height: 45px;
          background: @shadow;
          background: url("../../assets/headBg.jpg");
          box-shadow: 0 -5px 45px @sbg inset;
          margin: 10px 10px;
          border-radius: 5px;
          text-align: center;
          &:hover{
            background: @bgc;
            color: red;
          }
          &:first-child{
            margin-top: 20px;
          }
          a{
            display: block;
            color: @content;
            font-size: 16px;
            border-radius: 3px;
            &:hover{
              color: red;
              // box-shadow: 3px 3px 3px @shadow;
            }
          }
        }
      }
    }
  }
</style>
