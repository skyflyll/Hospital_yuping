<template>
  <div class="container">
    <div class="leaderHead">
      <div v-if="type ==3">人才招聘</div>
      <div v-else-if="type ==2">医院动态</div>
      <div v-else-if="type ==1">新闻公告</div>
      <div v-else-if="type ==4">医疗设备</div>
      <div v-else-if="type ==5">新技术、项目</div>
      <div v-else-if="type ==6">政策法规</div>
      <div v-else-if="type ==7">建党园地</div>
      <div v-else-if="type ==8">医院荣誉</div>
      <div v-else-if="type ==11">健康讲座</div>
      <div v-else-if="type ==9">职工之家</div>
      <div v-else-if="type ==10">患者心声</div>
      <div v-else-if="type ==12">医护天地</div>

    </div>
    <div class="leaderList">
      <ul>
        <li v-for="(item,index) in details" :key="index">
          <router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}" :props="item">
            <!--<img :src="item.src" alt="">-->
            <div class="leader-detail">

                <span class="title">{{item.title}}</span>

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
  name:'v-news-list',
  data(){
    return{
      type:3,
      details:[],
      count:0,
      limit:10,
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

    getList:function (limit,skip,type,table) {
      var that = this;
      var params = new URLSearchParams();
      params.append('limit', limit);
      params.append('skip', skip);
      params.append('query', JSON.stringify({type:type}));
      params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
      params.append('collection', table);
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
              item.title = item.title+'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - '
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
      var serch = this.urlArgs(window.location.search);
      this.type=serch.type;
      this.skip  = (i-1)*this.limit;
      this.getList(this.limit,this.skip,this.type,serch.table);
    }

  },
  created(){
    //初始化数据
    // console.log(window.location.search);
    var serch = this.urlArgs(window.location.search);
    this.type=serch.type;
    this.getList(this.limit,this.skip,serch.type,serch.table);
    // console.log(this.limit,this.skip,serch.type, serch.table);
  },
  watch:{
    '$route': function () {
      var serch = this.urlArgs(window.location.search);
      this.type=serch.type;
      this.limit = 10;
      this.skip = 0;
      this.getList(this.limit,this.skip,serch.type, serch.table)
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
                width: 550px;
                overflow: hidden;
                float: left;
                margin-left: 30px;
              }
              &:last-child{
                width: 110px;
                float: left;
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
