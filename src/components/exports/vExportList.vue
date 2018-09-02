<template>
  <div class="container">
    <div class="head">
      <h1>{{title}}</h1>
    </div>
    <div class="export-list clearfix">
      <div class="expert-wrap clearfix" v-for="item in exports">
        <img :src="item.src" alt="img">
        <div class="expert-introduce">
          <p><strong>姓名: </strong>{{item.name}}</p>
          <p><strong>科室: </strong>{{item.department}}</p>
          <p><strong>职务: </strong>{{item.position}}</p>
          <p><strong>职称: </strong>{{item.title}}</p>
          <div class="btn">
            <Button type="info" size="small"><router-link :to="{path:'/'+ shengfen +'/detail',query:{id:item._id}}">介绍</router-link></Button>
            <Button type="info" size="small"><router-link :to="{path:'/'+ shengfen +'/detail',query:{id:item._id}}">出诊信息</router-link></Button>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <Page :total="count" :page-size="limit" @on-change="upGetList"  show-elevator class="page"></Page>
    </div>
  </div>
</template>
<script>
export default {
  name:'v-export-list',
  data(){
    return{
      title:'专家介绍',
      shengfen:'',
      count:12,
      limit:9,
      skip:0,
      type:'1',
      exports:[]
    }
  },

  components:{
  },
  methods:{
    getNews: function (limit,skip,type) {
        var that = this;
        var params = new URLSearchParams();
        params.append('limit', limit);
        params.append('skip', skip);
        params.append('query', JSON.stringify({type:type}));
        params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
        params.append('collection', 'person');
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
                // console.log(item)
                that.count = res.data.data.count;
                if(item.src){
                  item.src = item.src.replace("wwwroot","http://localhost:8088")
                }
              });
              that.exports= res.data.data;
            }
          )
          .catch()
    },
    upGetList:function (i) {
      // console.log(i)
      this.skip  = (i-1)*this.limit;
      this.getNews(this.limit,this.skip);
    }
  },
  watch:{
    '$route':function () {
      // console.log(window.location.pathname.split('/')[1]);
      var shengfen = window.location.pathname.split('/')[1];
      this.shengfen = shengfen;
      if(shengfen=='zhuanjia'){
        this.type ='1';
        this.title='专家介绍';
      }else if (shengfen=='yisheng'){
        this.type ='2';
        this.title='医生介绍';
      }else if (shengfen=='hushi'){
        this.type ='3';
        this.title='护士介绍';
      }
      // console.log(this.limit,this.skip,this.type);
      this.getNews(this.limit,this.skip,this.type);
    }
  },
  created(){
    // console.log(window.location.pathname.split('/')[1]);
    var shengfen = window.location.pathname.split('/')[1];
    this.shengfen = shengfen;
    if(shengfen=='zhuanjia'){
      this.type ='1';
      this.title='专家介绍';
    }else if (shengfen=='yisheng'){
      this.type ='2';
      this.title='医生介绍';
    }else if (shengfen=='hushi'){
      this.type ='3';
      this.title='护士介绍';
    }
    // console.log(this.limit,this.skip,this.type);
    this.getNews(this.limit,this.skip,this.type);
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
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
.container{
  width: 100%;
  border: 2px solid @shadow;
  .head{
    height: 80px;
    text-align: center;
    padding: 0  10px;
    border-bottom: 1px solid red;
    padding-top: 38px;
    h1{
      font-size: 22px;
      color: red;
      height: 30px;
      line-height: 30px;
    }
  }
  .export-list{
    width: 720px;
    min-height: 500px;
    .expert-wrap{
      width: 233px;
      height: 180px;
      box-sizing: border-box;
      box-shadow: 2px 2px 2px @bgc;
      border-radius: 3px;
      float: left;
      margin-right: 5px;
      background: @bgc;
      margin-top: 10px;
      &:first-child{
        margin-left: 2.5px;
      }
      &:last-child{
        margin-right: 2.5px;
      }
      &:hover{
        box-shadow: 3px 3px 3px @border;
      }
      img{
        display: block;
        width: 90px;
        height: 130px;
        background: @border;
        float: left;
        margin-top: 15px;
        border-radius: 5px;
        margin-left: 6px;
        &:hover{
          box-shadow: 2px 2px 2px @border;
        }
      }
      .expert-introduce{
        width: 130px;
        float: right;
        height: 180px;
        padding-top: 18px;
        color: @content;
        p{
          font-size: 13px;
          margin: 5px;
          width: 128px;
          height: 21px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover{
            color: red;
            cursor: pointer;
          }
        }
        .btn{
          width: 100%;
          margin-top: 12px;
          button{
            float: left;
            display: inline-block;
            margin: 0;
            font-size: 13px;
            padding: 0 5px;
            span{
              a{
                color: #fff;
                font-size: 13px;
              }
            }
            &:first-child{
              /*width: 50px;*/
              margin-left: 5px;
            }
            &:last-child{
              /*width: 80px;*/
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
  .page{
    margin-top: 20px;
    width: 100%;text-align: center;
  }
}
</style>
