<template>
  <div class="expert">
    <div class="expert-head">
      <h2>专家介绍</h2>
      <span><a href="javascript:;">更多 >></a></span>
    </div>
    <div class="expert-content">
      <vue-seamless :data="exports" :class-option="classOption5" class="scroll-wrap">
        <div class="expert-wrap" v-for="item in exports">
          <img :src="item.url" alt="img">
          <div class="expert-introduce">
            <p><strong>姓名: </strong>{{item.name}}</p>
            <p><strong>科室: </strong>{{item.department}}</p>
            <p><strong>职务: </strong>{{item.position}}</p>
            <p><strong>职称: </strong>{{item.title}}</p>
            <div class="btn">
              <a href=""><Button type="primary" size="small">{{item.introduce}}</Button></a>
              <a href=""><Button type="primary" size="small">{{item.out}}</Button></a>
            </div>
          </div>
        </div>
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
          limitMoveNum: 4,
          direction: 2,
          step: 1,
          hoverStop: true,
          waitTime: 1000
        }
      },
    },
    data(){
      return{
        exports:[
          {
            url:require('../../assets/logo.png'),
            name:'王老五',
            department:'妇产科',
            position:'主任',
            title:'高级医师',
            introduce:'介绍',
            out:'出诊信息'
          },{
            url:require('../../assets/logo.png'),
            name:'王老五',
            Department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },{
            url:require('../../assets/logo.png'),
            name:'王老五',
            Department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },{
            url:require('../../assets/logo.png'),
            name:'王老五',
            Department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },
        ]
      }
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
    margin-top: 20px;
    border: 1px solid @light;
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
      margin-top: 5px;
      border-bottom: 0;
      .scroll-wrap{
        margin: 10px 0;
        width: 998px;
        overflow: hidden;
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
            height: 151px;
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
              font-size: 14px;
              margin: 5px;
              &:hover{
                color: red;
                cursor: pointer;
              }
            }
            .btn{
              width: 100%;
              margin-top: 12px;
              a{
                float: left;
                display: block;
                padding: 0;
                margin: 0;
                font-size: 14px;
                &:first-child{
                  width: 50px;
                }
                &:last-child{
                  width: 80px;
                }
              }
            }
          }
        }
      }

    }
  }
</style>
