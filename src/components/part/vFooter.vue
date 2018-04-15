<template>
  <div class="footer">
    <div class="footer-head">
      <div class="head-wrap">
        <ul>
          <li><a href="">版权声明</a></li>
          <li><a href="">医院简介</a></li>
          <li><a href="">就医指南</a></li>
          <li><a href="">医院位置</a></li>
          <li><a href="">玉屏侗族自治县人民医院</a></li>
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
        <p>Copyright @ 2018-2018 玉屏侗族自治县人民院
          <br/>
          百度认证官网：玉屏侗族自治县人民院 | 中文域名：玉屏侗族自治县人民院.公益
          <br/>
          电话：0851-xxxxxxxxx 传真：0851- xxxxxxxxx 电子邮件地址：xxxxxxxx@163.com
          <br/>
          地址：玉屏侗族自治县人民院xxxxx，邮编：550002 贵公网安备 xxxxxxxxxxxxxxx号
          <br/>
          执业机构许可证登记号：xxxxxxxxxxx-xxxxxxxxxxxxxxx 黔ICP备xxxxxxxxxxx号 黔卫网审【xxxx】0xxx号</p>
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
      }
    }

  }
</style>
