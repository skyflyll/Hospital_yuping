<template>
  <div class="honor">
    <div class="honor-head">
      <h2>医院荣誉</h2>
      <span><a href="">更多 >></a></span>
    </div>
    <vue-seamless :data="notices" :class-option="classOption5" class="scroll-wrap">
      <ul class="ul-item clearfix">
        <li class="li-item" v-for="item in notices">
          <a :href="item.href">
            <img :src="item.url" alt="img">
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
    </vue-seamless>
  </div>

</template>

<script>
  import vueSeamless from 'vue-seamless-scroll'

  export default {
    name: "v-honor",
    components: {
      vueSeamless
    },
    data() {
      return {
        listData5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        notices: [
          {
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            url:require('../../assets/logo.png'),
            href: 'javascript:;'
          },
          {
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            url:require('../../assets/logo.png'),
            href: 'javascript:;'
          },
          {
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            url:require('../../assets/logo.png'),
            href: 'javascript:;'
          }, {
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            url:require('../../assets/logo.png'),
            href: 'javascript:;'
          }, {
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            url:require('../../assets/logo.png'),
            href: 'javascript:;'
          }
        ]
      }
    },
    computed: {
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
    created() {
      // setTimeout(() => {
      //   this.listData5 = [1, 2, 3, 4, 5,6,7,8,9,10]
      // }, 3000)
    }
  }
</script>

<style lang="less" scoped>
  @shadow:#d7dde4;
  @bgc: #f8f8f9;
  @content:#657180;
  @sbg: #ffefeb;
  @dark: #2b85e4;
  @border:#dddee1;
  @bgc: #f8f8f9;
  @border: #e9eaec;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @color: #657180;

  .honor {
    width: 1002px;
    margin: 20px auto;
    min-height: 300px;
    border: 1px solid @light;
    .honor-head {
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
    .scroll-wrap {
      width: 1000px;
      height: 250px;
      overflow: hidden;
      margin-top: 5px;
      .ul-item {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 1550px;
        .li-item {
          float: left;
          width: 300px;
          height: 250px;
          margin: 0 0 0 10px;
          line-height: 38px;
          /*background-color: lightgray;*/
          border-radius: 5px;
          font-family: 'Amaranth', sans-serif;
          font-size: 20px;
          overflow: hidden;
          padding: 5px 5px;
          &:hover{
            box-shadow: 3px 3px 3px @border;
          }
          a {
            width: 300px;
            border: 0;
            padding: 0;
            margin: 0;
            display: block;
            height: 250px;
            color: @color;
            &:hover {
              color: red;
            }
            img{
              width: 300px;
              height: 200px;
              display: block;
              margin-left: -5px;
            }
            p{
              text-align: center;
              padding-right: 10px;
              color:@content ;
            }
          }
        }
      }
    }
  }

</style>
