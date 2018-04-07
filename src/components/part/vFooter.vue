<template>
  <div class="footer">
    <div class="footer-head">
      <div class="head-wrap">
        <ul>
          <li><a href="">xxxxxxxx</a></li>
          <li><a href="">xxxxxxxx</a></li>
          <li><a href="">xxxxxxxx</a></li>
          <li><a href="">xxxxxxxx</a></li>
          <li><a href="">xxxxxxxx</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-content">
      <h1>XXXXXXXXXXXXXXXXXXXXXXX</h1>
      <div>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
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
        height: 45px;
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
    }

  }
</style>
