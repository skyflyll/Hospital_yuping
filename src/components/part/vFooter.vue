<template>
  <div class="footer">
    <div class="footer-head">
      <div class="head-wrap">
        <ul>
          <li><a href="javascript:;">版权声明</a></li>
          <li><router-link :to="{path:'/zhinan/list',query:{name:'医院简介'}}">医院简介</router-link></li>
          <li><router-link :to="'/zhinan'">就医指南</router-link></li>
          <li><a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E7%8E%89%E5%B1%8F%E4%BE%97%E6%97%8F%E8%87%AA%E6%B2%BB%E5%8E%BF%E4%BA%BA%E6%B0%91%E9%99%A2" target="_blank">医院位置</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-content">
      <div class="logo-wrap">
        <img src="../../assets/logo.jpg" alt="logo-img">
        <div class="logo-detials">
          <h1>玉屏侗族自治县人民医院</h1>
          <span>Yuping Dong Nationality Autonomous County People's Hospital</span>
        </div>
      </div>
      <div class="content-detail">
        <p>Copyright @ 2015-2030 玉屏侗族自治县人民院
          <br/>
          百度认证官网：玉屏侗族自治县人民院 | 中文域名：玉屏侗族自治县人民院.公益
          <br/>
          电话：0856-3221096 传真：0856-3221096 电子邮件地址：ypxrmyy@163.com
          <br/>
          地址：铜仁市玉屏侗族自治县平溪镇茅坪新区平江路，邮编：554000 
          <br/>
          执业机构许可证登记号：42960004152062211A1001 </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-footer",
    props: '',
  }
</script>

<style lang="less" scoped>
  @bgc: #f8f8f9;
  @border: #e9eaec;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  .footer {
    width: 100%;
    height: 350px;
    margin-top: 30px;
    .footer-head {
      height: 45px;
      width: 100%;
      text-align: center;
      background: @primary;
      .head-wrap {
        width: 1000px;
        background: @primary;
        height: 35px;
        margin: 0 auto;
        ul{
          list-style: none;
          width: 500px;
          margin: 0 auto;
          li{
            float: left;
            line-height: 45px;
            height: 45px;
            width: 100px;
            text-align: center;
            a{
              width: 100px;
              height: 45px;
              display: block;
              color: @bgc;
            }
          }
        }
      }
    }
    .footer-content{
      width: 1000px;
      height: 250px;
      margin: 0 auto;
      margin-top: 50px;
      .logo-wrap {
        width: 500px;
        height: 120px;
        float: left;
        img {
          width: 100px;
          height: 100px;
          display: block;
          background: @bgc;
          float: left;
          vertical-align: middle;
          margin-top: 10px;
        }
        .logo-detials {
          width: 380px;
          float: right;
          padding-left: 10px;
          h1 {
            &:first-child {
              margin-top: 30px;
              font-size: 30px;
              color: @primary;
            }
          }
          span{
            font-size: 10px;
            color: @light;
          }
        }
      }
      .content-detail{
        width: 500px;
        float: left;
        p{
          margin-top: 15px
        }
      }
    }

  }
</style>
