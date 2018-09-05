<template>
  <div class="container clearfix">
    <div class="export">
      <span>{{articl.department}}</span>
      <!--<span>{{articl.position}}</span>-->
    </div>
    <div class="export-wrap clearfix">
      <div class="export-img clearfix">
        <img :src="articl.src" alt="alt">
      </div>
      <div class="export-info clearfix">
        <p><strong>姓名: </strong>{{articl.name}}</p>
        <p><strong>科室: </strong>{{articl.department}}</p>
        <p><strong>职务: </strong>{{articl.position}}</p>
        <p><strong>职称: </strong>{{articl.title}}</p>
        <Button type="success" size="small"><a href="https://weixincs.guizhou12320.org.cn/12320yywz/reservationHisDetail" target="_blank">挂号预约</a> </Button>
      </div>
      <div class="export-in clearfix">
        <h1>
          <span>擅长</span>
        </h1>
        <p>
          {{articl.adept}}
        </p>
      </div>
      <div class="export-in clearfix">
        <h1>
          <span>详情介绍</span>
        </h1>
        <p>
          {{articl.detail}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-export-detail",
    data() {
      return {
        articl:
          {
            adept: "",
            department: "",
            detail: "",
            duty: "",
            name: "",
            position: "",
            src: "",
            tel: "",
            time: "",
            title: "",
            type: "",
            _id: "",
          }

      }
    },
    methods: {
      getArticl: function (id) {
        var that = this;
        var params = new URLSearchParams();
        params.append('query', JSON.stringify({_id: id}));
        params.append('projection', JSON.stringify({"projection": {}}));
        params.append('collection', 'person');
        this.$axios({
          method: 'post',
          url: '/api/select',
          data: params
        })
          .then(
            function (res) {
              // console.log(res)
              if(res.data.data.src ){
                res.data.data.src = res.data.data.src.replace('wwwroot','http://localhost:8088');
              }
              that.articl = res.data.data;
            }
          )
          .catch()
      }
    },
    created() {
      var id = decodeURI(window.location.search, 'UTF-8')
      id = id.replace('?id=', '');
      // console.log(id)
      this.getArticl(id);
    },
    watch: {
      //监听路由的变化
      '$route': function () {
        var id = decodeURI(window.location.search, 'UTF-8')
        id = id.replace('?id=', '');
        // console.log(id)
        this.getArticl(id);
      }
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
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }

  .container {
    width: 100%;
    padding: 15px 30px 50px 30px;
    border: 2px solid @shadow;
    .export {
      font-size: 22px;
      text-align: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid @shadow;
      vertical-align: bottom;
      padding-top: 38px;
      color: red;
      span {
        font-size: 18px;
        &:last-child {
          color: red;
        }
      }
    }
    .export-wrap {
      width: 100%;
      padding: 15px;
      height: 185px;
      .export-img {
        display: block;
        width: 155px;
        height: 185px;
        float: left;
        border: 2px solid @shadow;
        &:hover{
          box-shadow: 3px 3px 3px @shadow;
        }
        img {
          display: block;
          width: 151px;
          height: 183px;
          background: @bgc;
        }
      }
      .export-info {
        height: 185px;
        width: 456px;
        background: @bgc;
        float: left;
        margin-left: 15px;
        p {
          height: 35px;
          font-size: 16px;
          line-height: 35px;
          margin-left: 15px;
          &:first-child{
            margin-top: 10px;
          }
          strong{
            color: red;
            font-size: 18px;
          }
        }
        button {
          float: right;
          margin-right: 20px;
        }
      }
      .export-in {
        min-height: 38px;
        width: 100%;
        float: left;
        h1 {
          margin-top: 20px;
          height: 39px;
          display: block;
          border-bottom: 1px solid red;
          span{
            display: inline-block;
            height: 35px;
            line-height: 38px;
            font-size: 18px;
            padding: 0  20px;
            /*margin-left: 30px;*/
            border: 1px solid red;
            border-bottom: 1px solid #fff;
          }
        }
        p{
          min-height: 50px;
          padding:20px 10px;
          background: @bgc;
        }
      }
    }
    .page {
    }

  }
</style>
