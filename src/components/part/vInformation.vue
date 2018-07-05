<template>
  <div class="information claerfix">

    <div class="recruit">
      <div class="recruit-head">
        <h2>人才招聘</h2>
        <span><router-link :to="{path:'/news/list',query:{table:'announcement',type:3}}">更多 >></router-link></span>
      </div>
      <div class="recruit-content">
        <ul>
          <li v-for="item in recruits">
            <router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="lecture">
      <div class="lecture-head">
        <h2>健康讲座</h2>
        <span><router-link :to="{path:'/news/list',query:{table:'announcement',type:11}}">更多 >></router-link></span>
      </div>
      <div class="lecture-content">
        <ul>
          <li v-for="item in lectures">
            <router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </router-link>
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
    methods:{
      getNews: function (limit,skip,type,table) {
        var that = this;
        var params = new URLSearchParams();
        params.append('limit', limit);
        params.append('skip', skip);
        params.append('query', JSON.stringify({type:type}));
        params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
        params.append('collection', table);
        this.$axios({
          method: 'post',
          url: '/api/query',
          data: params
        })
          .then(
            function (res) {
              // console.log(res);
              // that.recruits = res.data.data;

              res.data.data.map(function (item) {
                // 将时间格式化你
                var time = new Date(item.time);
                item.time = time.toLocaleDateString().replace(/\//g, "-");
                item.title = item.title+'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ';
                //内容格式化
                // item.content = item.content.replace(/(\n)/g, "");
                // item.content = item.content.replace(/(\t)/g, "");
                // item.content = item.content.replace(/(\r)/g, "");
                // item.content = item.content.replace(/<\/?[^>]*>/g, "");
                // item.content = item.content.replace(/\s*/g, "");
                // item.content = item.content.replace(/&nbsp;*/g, "");
                // console.log(item.content)
                // console.log(item.time)
              });
              if(type==='3'){
                that.recruits = res.data.data;
              }else if(type==='11'){
                that.lectures = res.data.data;
              }
              // console.log(that.recruits)
              // console.log(timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8));
            }
          )
          .catch()
      }
    },
    created() {
      this.getNews('6','0','3','announcement');
      this.getNews('6','0','11','announcement');
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
    border: 1px solid @light;
    ul {
      list-style: none;
      li {
        padding-top: 10px;
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
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            background: @bgc;
            &:first-child {
              float: left;
              width: 80%;
              padding-left: 10px;
              /*padding-right: 10px;*/
              /*margin-right: 10px;*/
            }
            &:last-child {
              width: 20%;
              text-align: center;
              float: right;
              /*width: 95px;*/
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
