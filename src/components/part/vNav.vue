<template>
  <div class="nav">
    <div class="nav-wrap">
      <ul>
        <li v-for="(item,index) in nav" :key="index" @click="toggleNavs(index)">
          <router-link v-if="item.filter" :to="{ path: item.url,query:{name:'门诊安排'}}"
                       :class="{active:index===navIndex}">
            {{item.name}}
          </router-link>
          <router-link v-else :to="{ path: item.url}"
                       :class="{active:index===navIndex}">
            {{item.name}}
          </router-link>
          <div class="nav-list" v-if="item.list">
            <ul>
              <li v-for="i in item.list">
                <router-link v-if="i.filter" :to="{ path: i.url,query:{name:i.filter}}">
                  {{i.name}}
                </router-link>
                <a v-else-if="i.name=='院长信箱'" :href="email">{{i.name}}</a>
                <router-link v-else :to="{ path: i.url}">
                  {{i.name}}
                </router-link>
              </li>

            </ul>
          </div>
          <div class="nav-important-list" v-else>
            <ul class="clear">
              <li v-for="(i) in item.importantList" class="clear">
                <p class="import-title">{{i.name}}</p>
                <div class="import-detail clear">
                  <span v-for="(menu) in i.importDetails">
                    <router-link :to="{ path: '/keshi/class',query:{name:menu.name}}">
                      {{menu.name}}
                    </router-link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import navData from './navList.json'
  export default {
    name: "v-nav",
    props: '',
    data() {
      return {
        email:'',
        navIndex: 0,
        nav: [],
      }
    },
    methods: {
      toggleNavs: function (index) {
        // console.log(index);
        this.navIndex = index;
      },
      importantList:function () {
        // console.log(this.nav);
        var that =this;
        this.$axios({
          method: 'get',
          url: '/api/getDepartment',
        })
          .then(
            function (res) {
              // console.log(res.data.data);
              // res.data.data.name = '科室介绍';
              res.data.data.map(function (item) {
                item.show = false;
              });
              res.data.data[0].show=true;
              that.nav[2].importantList = res.data.data;
            }
          )
      },
      equipment:function () {
        var that = this;
        var params = new URLSearchParams();
        // params.append('limit', '');
        // params.append('skip', '');
        params.append('query', JSON.stringify({type:"4"}));
        params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
        params.append('collection', 'announcement');
        this.$axios({
          method: 'post',
          url: '/api/query',
          data: params
        })
          .then(
            function (res) {
              // console.log(that.nav[5].list);
              // console.log(res.data.data);
              res.data.data.map(function (item) {
                item.name = item.title
                item.url = '/news/detail?table=announcement&id='+item._id;
              });
              that.nav[5].url = '/news/list?table=announcement&type=4'
              that.nav[5].list = res.data.data
              // console.log(that.nav[5].list)

              // that.recruits = res.data.data;
            }
          )
          .catch()
      },
      Technical:function () {
        var that = this;
        var params = new URLSearchParams();
        // params.append('limit', '');
        // params.append('skip', '');
        params.append('query', JSON.stringify({type:"5"}));
        params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
        params.append('collection', 'announcement');
        this.$axios({
          method: 'post',
          url: '/api/query',
          data: params
        })
          .then(
            function (res) {
              // console.log(that.nav[5].list);
              // console.log(res.data.data);
              res.data.data.map(function (item) {
                item.name = item.title
                item.url = '/news/detail?table=announcement&id='+item._id;
              });
              that.nav[6].url = '/news/list?table=announcement&type=5'
              that.nav[6].list = res.data.data;
              // console.log(that.nav[6].list)

              // that.recruits = res.data.data;
            }
          )
          .catch()
      },
      getArticl:function () {
          var that = this;
          var params = new URLSearchParams();
          params.append('query', JSON.stringify({title:"院长邮箱"}));
          params.append('projection', JSON.stringify({"projection": {}}));
          params.append('collection', 'special');
          this.$axios({
            method: 'post',
            url:'/api/select',
            data:params
          })
            .then(
              function (res) {
                // console.log(">>>>>>>>>>>>",res.data.data.content);
                that.email ="mailto:"+res.data.data.content
              }
            )
            .catch()
        }
    },
    created(){
      this.nav=navData;
      this.importantList();
      this.equipment();
      this.Technical();
      this.getArticl();
      // console.log(this.nav)
    }

  }
</script>

<style lang="less" scoped>
  @shadow: #d7dde4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @content: #657180;
  @sbg: #ffefeb;
  @border: #dddee1;
  .clear::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }

  .active {
    color: @bgc;
    font-weight: bold;
    display: block;
    height: 45px;
    background: @dark;
  }

  * {
    padding: 0;
    margin: 0;
  }

  .nav {
    width: 100%;
    height: 45px;
    background: @primary;
    .nav-wrap {
      height: 45px;
      width: 1000px;
      margin: 0 auto;
      background: @primary;
      & > ul {
        list-style: none;
        & > li {
          float: left;
          width: 100px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          box-sizing: border-box;
          &:hover {
            background: @dark;
            .nav-list {
              display: block;
            }
            .nav-important-list {
              display: block;
            }
            a {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: @bgc;
              font-weight: bold;
            }
          }
          & > a {
            display: block;
            color: #ffffff;
            text-decoration: none;
          }
          .nav-list {
            position: relative;
            z-index: 999;
            width: 102px;
            min-height: 0;
            border: 1px solid @primary;
            box-sizing: border-box;
            border-top: 0;
            margin-left: -1px;
            margin-top: -2px;
            display: none;
            background: #ffffff;
            ul {
              list-style: none;
              width: 100px;
              box-sizing: border-box;
              li {
                height: 45px;
                line-height: 45px;
                &:hover {
                  background: @primary;
                  a {
                    color: #fff;
                  }
                }
                &:active{
                  background: @light;
                }
                a {
                  display: block;
                  color: @primary;
                  text-decoration: none;
                }
              }
            }
          }
          .nav-important-list {
            position: relative;
            width: 1000px;
            min-height: 300px;
            border: 1px solid @primary;
            background: #ffffff;
            margin-left: -200px;
            z-index: 999;
            border-top: 0;
            margin-top: -1px;
            padding-bottom: 10px;
            padding-top: 10px;
            display: none;
            & > ul {
              list-style: none;
              & > li {
                text-align: left;
                display: block;
                .import-title {
                  color: @primary;
                  font-size: 22px;
                  height: 38px;
                  width: 95%;
                  margin: 0 auto;
                  line-height: 38px;
                  border-bottom: 1px dashed @primary;
                }
                .import-detail {
                  width: 95%;
                  margin: 0 auto;
                  span {
                    display: block;
                    float: left;
                    margin-right: 10px;
                    a {
                      text-decoration: none;
                      color: @primary;
                      padding: 0 3px;
                      &:hover {
                        background: @primary;
                        color: #fff;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
