<template>
  <div class="container">
    <div class="leaderHead">
      <div>科室介绍</div>
    </div>
    <div class="leaderList">
      <ul>
        <li v-for="(item,index) in details" :key="index">
          <router-link :to="{ path: '/keshi/class',query:{name:item.title}}">
            <div class="leader-detail">

              <span class="title">{{item.name}}</span>

              <span class="time">{{item.time}}</span>
            </div>
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
    <Page :total="count" :page-size="limit" @on-change="upGetList"  show-elevator class="page"></Page>
  </div>
</template>
<script>
  export default {
    name:'v-depart-list',
    data(){
      return{
        details:[],
        count:0,
        limit:20,
        skip:0
      }
    },
    components:{

    },
    methods:{
      //提取url
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

      getList:function (limit,skip) {
        var that = this;
        var params = new URLSearchParams();
        params.append('limit', limit);
        params.append('skip', skip);
        params.append('query', JSON.stringify({}));
        params.append('projection', JSON.stringify({"projection": {}}));
        params.append('collection', 'department');
        this.$axios({
          method: 'post',
          url:'/api/query',
          data:params
        })
          .then(
            function (res) {
              // console.log(res);
              that.count = res.data.count;
              res.data.data.map(function (item) {
                var time = new Date(item.time);
                item.time = time.toLocaleDateString().replace(/\//g, "-");
                item.title= item.name;
                item.name = item.name+'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - '
              });
              that.details= res.data.data;

              // that.details=res.data.data;
              // that.details=that.getLength(res.data.data);
              //["0"].src
              // console.log(res.data.data)

            }
          )
          .catch()
      },
      //点击页码刷新数据
      upGetList:function (i) {
        this.skip  = (i-1)*this.limit;
        this.getList(this.limit,this.skip);
      }

    },
    created(){
      //初始化数据
      // console.log(window.location.search);
      // var serch = this.urlArgs(window.location.search);
      // this.type=serch.type;
      this.getList(this.limit,this.skip);
      // console.log(this.limit,this.skip,serch.type, serch.table);
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
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .container{
    width: 100%;
    padding: 15px 10px;
    border: 2px solid @shadow;
    .leaderHead{
      text-align: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px dashed red;
      vertical-align: bottom;
      padding-top: 38px;
      color: red;
      div{
        font-size: 22px;

      }
    }
    .leaderList{
      width: 100%;
      &>ul{
        list-style: none;
        padding-bottom: 15px;
        &>li{
          padding-top: 20px;
          width: 100%;
          height: 38px;
          line-height: 38px;
          &>a{
            display: block;
            color: @content;
            &:hover{
              color: red;
            }
            .leader-detail{
              width: 100%;
              float: right;
              background: @bgc;
              &>span{
                display: inline-block;
                height: 38px;
                &:first-child{
                  width: 90%;
                  overflow: hidden;
                  float: left;
                }
                &:last-child{
                  width: 10%;
                  float: right;
                }

              }

            }
          }
        }
      }
    }
    .page{
      text-align: center;
      margin-top: 50px;
    }

  }
</style>
