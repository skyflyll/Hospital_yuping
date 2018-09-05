<template>
  <div class="expert">
    <div class="expert-head">
      <h2>专家介绍</h2>
      <span><router-link :to="{path:'/zhuanjia'}">更多 >></router-link></span>
    </div>
    <div class="expert-content">
      <vue-seamless :data="exports" :class-option="classOption5" class="scroll-wrap">
        <ul class="ul-item clearfix">
          <li class="expert-wrap li-item" v-for="item in exports">
          <img :src="item.src" alt="img">
          <div class="expert-introduce">
            <p><strong>姓名: </strong>{{item.name}}</p>
            <p><strong>科室: </strong>{{item.department}}</p>
            <p><strong>职务: </strong>{{item.position}}</p>
            <p><strong>职称: </strong>{{item.title}}</p>
            <div class="btn">
              <Button type="info" size="small"><router-link :to="{path:'/zhuanjia/detail',query:{id:item._id}}">介绍</router-link></Button>
             <Button type="info" size="small"><router-link :to="{path:'/zhuanjia/detail',query:{id:item._id}}">出诊信息</router-link></Button>
            </div>
          </div>
          </li>
        </ul>
      </vue-seamless>
    </div>
  </div>
</template>
<script>
  import vueSeamless from 'vue-seamless-scroll'
  export default {
    name: "v-expert",
    components:{
      vueSeamless
    },
    computed:{
      classOption5() {
        return {
          limitMoveNum: 5,
          direction: 2,
          step: 1,
          hoverStop: true,
          waitTime: 1000
        }
      },
    },
    data(){
      return{
        exports:[{}]
      }
    },
    methods:{
      getNews: function () {
        var that = this;
        var params = new URLSearchParams();
        params.append('limit', '5');
        params.append('skip', '0');
        params.append('query', JSON.stringify({type:"1"}));
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
                if(item.src){
                  item.src = item.src.replace("wwwroot","http://localhost:8088")
                }
              });
              that.exports= res.data.data;
            }
          )
          .catch()
      }
    },
    created(){
      this.getNews()
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
  .expert {
    width: 1000px;
    margin: 0 auto;
    min-height: 230px;
    margin-top: 5px;
    margin-bottom: 20px;
    .expert-head{
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
    .expert-content{
      width: 100%;
      min-height: 180px;
      /*border-bottom: 0;*/
      padding-top: 5px;
      border: 2px solid @shadow;
      border-top: 1px solid @light;
      .scroll-wrap{
        margin: 10px 0;
        width: 996px;
        overflow: hidden;
        .ul-item{
          list-style: none;
          margin: 0;
          padding: 0;
          width: 1240px;
          .li-item {
            font-family: 'Amaranth', sans-serif;
          }
        }
        .expert-wrap{
          width: 243px;
          height: 180px;
          box-sizing: border-box;
          box-shadow: 2px 2px 2px @bgc;
          border-radius: 3px;
          float: left;
          margin-right: 5px;
          background: @bgc;
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
            width: 100px;
            height: 140px;
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
              width: 130px;
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

    }
  }
</style>
