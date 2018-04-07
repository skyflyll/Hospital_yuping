<template>
  <div class="party-center">
    <div class="party-wrap">
      <div class="party-head">
        <h2>xxxxxxxxxxxx</h2>
        <a href="javascript:;">more >></a>
      </div>
      <div class="party-content">
        <vue-seamless :data="partys" :class-option="classOption5" class="scroll-wrap">
          <ul class="ul-item clearfix">
            <li class="li-item" v-for="item in partys">
              <a :href="item.href">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
              </a>
            </li>
          </ul>
        </vue-seamless>
      </div>
    </div>
    <div class="center-wrap">
      <ul class="tabs">
        <li class="li-tab" v-for="(item,index) in tabsParam"
        @click="toggleTabs(index)"
        :class="{active:index!=nowIndex}">
          {{item}}
        </li>
        <div class="div-tab" v-show="nowIndex===0">
          <a href="">more >></a>
          <ul>
            <li v-for="item in xinsheng"><a href="">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </a></li>
          </ul>
        </div>
        <div class="div-tab" v-show="nowIndex===1">
          <a href="">more >></a>
          <ul>
            <li v-for="item in homes"><a href="">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </a></li>
          </ul>
        </div>
        <div class="div-tab" v-show="nowIndex===2">
          <a href="">more >></a>
          <ul>
            <li v-for="item in works"><a href="">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </a></li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import vueSeamless from 'vue-seamless-scroll'

  export default {
    name: "v-party-center",
    data() {
      return {
        partys: [
          {
            title: '1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          },
          {
            title: '2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          },
          {
            title: '3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          }, {
            title: '4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          }, {
            title: '5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          },
          {
            title: '6xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          },
          {
            title: '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          },
          {
            title: '8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            href: 'javascript:;',
            img: require('../../assets/logo.png')
          }
        ],
        tabsParam:['tab1','tab2','tab3'],
        nowIndex:0,
        xinsheng:[
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          }
        ],
        homes:[
          {
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },
          {
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          }
        ],
        works:[
          {
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },
          {
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          },{
            title:'homesxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'javascript:;'
          }
        ]
      }
    },
    components: {
      vueSeamless
    },
    methods:{
      toggleTabs:function (index) {
        this.nowIndex=index
      }
    },
    computed: {
      classOption5() {
        return {
          limitMoveNum: 8,
          direction: 2,
          step: 0.5,
          hoverStop: true,
          waitTime: 1000
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  @bgc: #f8f8f9;
  @border: #e9eaec;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @heightNav: 38px;
  @height: 178px;
  .party-center {
    width: 1000px;
    height: 300px;
    background: @bgc;
    margin-top: 5px;
    .party-wrap {
      width: 620px;
      height: 300px;
      float: left;
      .party-head {
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
      .party-content {
        width: 100%;
        .scroll-wrap {
          width: 620px;
          height: 250px;
          overflow: hidden;
          .ul-item {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 1640px;
            .li-item {
              float: left;
              width: 200px;
              height: 250px;
              margin: 0 0 0 5px;
              line-height: 38px;
              background-color: @bgc;
              font-family: 'Amaranth', sans-serif;
              font-size: 20px;
              overflow: hidden;
              padding: 0 5px;
              border-radius: 5px;
              &:hover {
                box-shadow: 2px 2px 2px @border;
              }
              &:first-child {
                margin: 0;
              }
              a {
                width: 300px;
                border: 0;
                margin: 0;
                display: block;
                height: 250px;
                color: @primary;
                &:hover {
                  color: red;
                }
                img {
                  margin-top: 10px;
                  display: block;
                  width: 200px;
                  height: 180px;
                }
                p {
                  width: 180px;
                  height: 38px;
                  line-height: 38px;
                  font-size: 22px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  box-sizing: border-box;
                  margin-top: 10px;
                }
              }
            }
          }
        }
      }
    }
    .center-wrap {
      width: 375px;
      height: 300px;
      background: @border;
      float: right;
      padding: 0;
      border:0;
      .tabs{
        width: 375px;
        height: 45px;
        padding:0;
        background: @primary;
        line-height: 45px;
        font-size: 20px;
        border: 0;
        .li-tab{
          border: 0;
          padding: 0;
          margin: 0;
          min-width: 100px;
          height: 42.5px;
          display:inline-block;
          text-align: center;
          background: @bgc;
          color: @primary;
        }
        .div-tab{
          width: 375px;
          height: 300px;
          position: relative;
          &>a{
            color: @bgc;
            position: absolute;
            right: 5px;
            top: -43px;
            &:hover{
              color: red;
            }
          }
          ul{
            list-style: none;
            width: 375px;
            padding-top: 15px;
            li{
              display: block;
              width: 375px;
              height: 38px;
              line-height: 38px;
              a{
                span{
                  display: block;
                  height: 38px;
                  &:first-child{
                    float: left;
                    width: 260px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding-left: 10px;
                  }
                  &:last-child{
                    float: right;
                    width: 100px;
                  }
                }
              }
            }
          }
        }
        .active{
          background: @primary;
          color: @bgc;
        }
      }


    }
  }
</style>
