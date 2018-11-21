<template>
  <div class="container">
    <div class="leaderHead">
      领导班子
    </div>
    <div class="leaderList">
      <ul>
        <li v-for="(item,index) in details" :key="index">
          <router-link :to="{ path: 'lindao/xaingqing',query:{id:item._id}}" :props="item">
            <img :src="item.src" alt="">
            <div class="leader-detail">
              <div class="detail-head">
                <p class="name">{{item.name}}</p>
                <p class="position">{{item.position}}</p>
              </div>
              <p class="details">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.detail}}<a href="">【详情】</a></p>
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
  name:'v-Profiles',
  data(){
    return{
      details:[],
      count:12,
      limit:5,
      skip:0
    }
  },
  components:{

  },
  methods:{
    //截取前130个字符
    getLength:function (data) {
      data.map(function (item) {
        var rgx = /[\n]+/g;
        var space = /[\s]+/g;
        item.detail= item.detail.replace(rgx,'');
        item.detail= item.detail.replace(space,'');
        let para=document.createElement("p");
        para.innerHTML=item.detail;
        item.detail=para.innerText;
        // console.log(item.detail)
        item.src = item.src.replace("wwwroot","http://localhost:8088");
        item.detail=item.detail.substr(0,120)+"..."
        // console.log(item.detail)
      });
      return data;
    },
    getList:function (limit,skip) {
      var that = this;
      var params = new URLSearchParams();
      params.append('limit', limit);
      params.append('skip', skip);
      // params.append('query', JSON.stringify({}));
      params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
      params.append('collection', 'leadership');
      this.$axios({
        method: 'post',
        url:'/api/query',
        data:params
      })
        .then(
          function (res) {
            // console.log(res);
            that.count = res.data.count; 
            // that.details=res.data.data;
            // console.log(res.data.count);
            that.details=that.getLength(res.data.data);
            //["0"].src
            // console.log(that.details)

          }
        )
        .catch()
    },
    //点击页码刷新数据
    upGetList:function (i) {
        // console.log(i)
      this.skip  = (i-1)*this.limit;
      this.getList(this.limit,this.skip);
    }

  },
  created(){
    //初始化数据
    this.getList(this.limit,this.skip)
    // console.log(this.$router)
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
    font-size: 22px;
    text-align: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px dashed red;
    vertical-align: bottom;
    padding-top: 38px;
    color: red;
  }
  .leaderList{
    width: 100%;
    &>ul{
      list-style: none;
      padding-bottom: 15px;
      &>li{
        width: 678px;
        height: 150px;
        margin: 20px auto 0 auto;
        &>a{
          display: block;
          &>img{
            display: block;
            float: left;
            width: 113px;
            height: 150px;
            border: 3px solid @bgc;
            &:hover{
              box-shadow: 5px 5px 5px @shadow;
            }
          }
          .leader-detail{
            width: 530px;
            float: right;
            background: @bgc;

            &:hover{
              box-shadow: 5px 5px 5px @shadow;
            }
            .detail-head{
              height: 35px;
              line-height: 35px;
              font-size: 16px;
              text-align: left;
              border-top:1px solid @shadow;
              background-image: url("../../assets/headBg.jpg");
              border-bottom: 2px solid #fff;
              .name{
                display: inline-block;
                margin:0 10px;
                &:hover{
                  text-decoration: underline;
                }
              }
              .position{
                display: inline-block;
                color: @content;
              }
            }
            &>p{
              width: 530px;
              height: 115px;
              padding: 15px;
              color: @content;
              text-align: left;
              &>a{
                color: red;
              }
            }
          }
        }
      }
    }
  }
  .page{}
  text-align: center;

}
</style>
