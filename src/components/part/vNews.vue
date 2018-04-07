<template>
  <div class="news-center">
    <div class="news-wrap">
      <div class="news-head">
        <h1>xxxxxxxxxxxxxxx</h1>
        <a href="javascript:;">more >></a>
      </div>
      <div class="news-content clearfix">
        <div class="content-wrap" v-for="item in newsCenter" :key="item.name">
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
            title:"xxxxxxxxxxxxxxx",
            href:"javascript:;"
          },{
            title:"xxxxxxxxxxxxxxx",
            href:"javascript:;"
          },{
            title:"xxxxxxxxxxxxxxx",
            href:"javascript:;"
          },{
            title:"xxxxxxxxxxxxxxx",
            href:"javascript:;"
          },{
            title:"xxxxxxxxxxxxxxx",
            href:"javascript:;"
          },{
            title:"xxxxxxxxxxxxxxx",
            href:"javascript:;"
          }
          ],
        newsCenter:[
          {
            name:'xxxxxxdxxxxxxxx',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'xxxxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccxxxxxx',
            time:'2018-03-15'
          },{
            name:'xxsxxxxxxxxxxxx',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'xxxxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccxxxxxx',
            time:'2018-03-15'
          },{
            name:'xxxxxxcxxxxxxxx',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'xxxxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccxxxxxx',
            time:'2018-03-15'
          },{
            name:'xxxxxxxxbxxxxxx',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'xxxxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccxxxxxx',
            time:'2018-03-15'
          },{
            name:'xxxxxxxexxxxxxx',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'xxxxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccxxxxxx',
            time:'2018-03-15'
          },{
            name:'xxxxxxxxxhxxxxx',
            href:'javascript:;',
            url:require("../../assets/doctor.png"),
            details:'xxxxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccxxxxxx',
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
        height: 45px;
        width: 100%;
        box-sizing: border-box;
        line-height: 45px;
        border-bottom: 1px solid @primary;
        background: @bgc;
        h1{
          color: @primary;
          margin-left: 10px;
          width: 500px;
          float: left;
        }
        a{
          width: 100px;
          height: 45px;
          display: block;
          float: right;
          text-align: center;
        }
      }
      .news-content{
        width: 100%;
        border-bottom: 1px solid @bgc;
        padding: 5px 0;
        .content-wrap{
          height: 95px;
          width: 395px;
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
              h2{
                font-size: 22px;
                margin-top: 10px;
                margin-bottom: -5px;
                font-weight: 700;
              }
              p{
                width: 90%;
                overflow: hidden;
                margin: 2px 0;
              }
              span{
                display: block;
                margin: 2px 0;
              }
            }
          }
        }
      }
    }
    .menu-wrap{
      width: 200px;
      float: right;
      border:1px solid @bgc;
      height: 370px;
      ul{
        list-style: none;
        li{
          box-sizing: border-box;
          width: 180px;
          height: 45px;
          line-height: 45px;
          background: @primary;
          margin: 10px 10px;
          border-radius: 5px;
          text-align: center;
          &:hover{
            background: @light;
          }
          &:first-child{
            margin-top: 20px;
          }
          a{
            color: #fff;
            font-size: 16px;
            &:hover{
              color: @bgc;
            }
          }
        }
      }
    }
  }
</style>