<template>
  <div class="container clearfix">
    <div class="leaderHead">
      <span><strong>标题：</strong>{{articl.title}}</span>
      <span><span>时间：</span>{{articl.time}}</span>
    </div>
    <div class="leaderList">
      <!--<div class="line"></div>-->
      <p v-html="articl.content"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-new-detail",
    data() {
      return {
        articl: {}
      }
    },
    methods: {
      urlArgs: function () {
        var args = {};
        var query = location.search.substring(1);
        var pairs = query.split("&");
        for (var i = 0; i < pairs.length; i++) {
          var pos = pairs[i].indexOf("=");
          if (pos == -1) {
            continue;
          }
          var name = pairs[i].substring(0, pos);
          // console.log(name);
          var value = pairs[i].substring(pos + 1);
          args[name] = value;
        }
        return args;
      },
      getArticl: function (id, table) {
        var that = this;
        var params = new URLSearchParams();
        params.append('query', JSON.stringify({_id: id}));
        params.append('projection', JSON.stringify({"projection": {}}));
        params.append('collection', table);
        this.$axios({
          method: 'post',
          url: '/api/select',
          data: params
        })
          .then(
            function (res) {
              // console.log(res);
              var time = new Date(res.data.data.time);
              res.data.data.time = time.toLocaleDateString().replace(/\//g, "-");
              that.articl = res.data.data;
              // console.log(that.articl)
            }
          )
          .catch()
      }
    },
    watch: {
      //监听路由的变化
      '$route': function () {
        // console.log('hhhhhhhhhhhhhhhhhh')
        var serch = this.urlArgs(window.location.search);
        this.getArticl(serch.id, serch.table);
      }
    },
    created() {
      // console.log(window.location.search);
      var serch = this.urlArgs(window.location.search);
      this.getArticl(serch.id, serch.table);
    },

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
    .leaderHead {
      font-size: 22px;
      text-align: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid red;
      vertical-align: bottom;
      padding-top: 38px;
      color: red;
      span {
        font-size: 16px;
        &:first-child {
          strong {
            font-size: 16px;
          }
        }
        &:last-child {
          color: @content;
          font-size: 13px;
        }
      }
    }
    .leaderList {
      width: 100%;
      overflow: hidden;
      .leader-img {
        width: 142px;
        height: 206px;
        margin: 0 auto;
        margin-top: 20px;
        img {
          width: 142px;
          height: 206px;
          border: 3px solid @shadow;
          &:hover {
            box-shadow: 5px 5px 8px @shadow;
          }
        }
      }
      .line {
        width: 100%;
        border-bottom: 1px solid @shadow;
        box-shadow: 2px 2px 2px @shadow;
        margin: 20px auto;
      }
      p {
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
