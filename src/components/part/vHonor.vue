<template>
  <div class="honor">
    <div class="honor-head">
      <h2>xxxxxxxcc</h2>
      <a href="">more >></a>
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
  @bgc: #f8f8f9;
  @border: #e9eaec;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @color: #657180;
  .honor {
    width: 1000px;
    margin: 5px auto;
    height: 300px;
    .honor-head {
      width: 100%;
      height: 45px;
      background: @primary;
      h2 {
        color: @bgc;
        float: left;
        font-size: 20px;
        line-height: 45px;
        padding-left: 5px;
      }
      a {
        display: block;
        float: right;
        color: @bgc;
        line-height: 45px;
        text-decoration: none;
        padding-right: 10px;
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
          background-color: lightgray;
          border-radius: 5px;
          font-family: 'Amaranth', sans-serif;
          font-size: 20px;
          overflow: hidden;
          padding: 0 5px;
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
            }
            p{
              text-align: center;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }

</style>
