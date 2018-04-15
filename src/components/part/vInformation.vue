<template>
  <div class="information claerfix">

    <div class="recruit">
      <div class="recruit-head">
        <h2>招聘信息</h2>
        <span><a href="javascript:;">更多 >></a></span>
      </div>
      <div class="recruit-content">
        <ul>
          <li v-for="item in recruits">
            <a href="javascript:;">
              <span>{{item.title}}</span>
              <span>- - -</span>
              <span>{{item.time}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="lecture">
      <div class="lecture-head">
        <h2>健康讲座</h2>
        <span><a href="javascript:;">更多 >></a></span>
      </div>
      <div class="lecture-content">
        <ul>
          <li v-for="item in lectures">
            <a href="javascript:;">
              <span>{{item.title}}</span>
              <span>- - -</span>
              <span>{{item.time}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "v-information",
    data() {
      return {
        recruits: [
          {
            title: '哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          },
          {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          },
          {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          },
          {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          }, {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          }, {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          }

        ],
        lectures: [
          {
            title: '哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          },
          {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          },
          {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          },
          {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          }, {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          }, {
            title: '哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或哈哈哈哈撒多付多付或或',
            time: '2018-03-16',
            href: 'javascript',
          }

        ]
      }
    },
    created() {
      var params = new URLSearchParams();
      params.append('limit', '20');
      params.append('skip', '0');
      // params.append('query', JSON.stringify({}));
      params.append('projection', JSON.stringify({"projection": {}}));
      params.append('collection', 'leadership');
      this.$axios({
        method: 'post',
        url: '/api/query',
        data: params
      })
        .then(
          function (res) {
            console.log(res)
          }
        )
        .catch()
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
  @dark: #2b85e4;
  @border:#dddee1;
  .claerfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .header {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    border-bottom: 1px solid @shadow;
    line-height: 38px;
    background-image: url("../../assets/headBg.jpg");
    box-shadow: 5px -5px 30px @shadow inset;
    h2{
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
    span{
      display: block;
      float: right;
      margin-right: 20px;
      a{
        color: @content;
        &:hover{
          color: red;
        }
      }
    }
  }

  .content {
    min-height: 250px;
    ul {
      list-style: none;
      li {
        height: 38px;
        line-height: 38px;
        a {
          font-size: 18px;
          word-spacing: 5px;
          color: @content;
          &:hover{
            color: red;
          }
          span {
            display: block;
            float: left;
            height: 38px;
            line-height: 38px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:first-child {
              width: 320px;
              padding-left: 10px;
              padding-right: 10px;
              margin-right: 10px;
            }
            &:nth-child(2) {
              width: 60px;
            }
            &:last-child {
              text-align: center;
              width: 95px;
            }
          }
        }

      }
    }
  }

  .information {
    width: 1000px;
    margin: 0 auto;
    min-height: 300px;
    background: #fff;
    padding-bottom: 20px;
    .recruit {
      width: 495px;
      min-height: 250px;
      box-sizing: border-box;
      border: 1px solid @light;
      float: left;
      .recruit-head {
        .header
      }
      .recruit-content {
        .content
      }
    }
    .lecture {
      width: 495px;
      min-height: 250px;
      box-sizing: border-box;
      border: 1px solid @light;
      float: right;
      .lecture-head {
        .header
      }
      .lecture-content {
        .content
      }
    }
  }
</style>
