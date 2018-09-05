<template>
  <div class="party-center">
    <div class="party-wrap">
      <div class="party-head">
        <h2>建党园地</h2>
        <span><router-link :to="{path:'/news/list?table=announcement&type=7'}">更多 >></router-link></span>
      </div>
      <div class="party-content">
        <vue-seamless :data="partys" :class-option="classOption5" class="scroll-wrap">
          <ul class="ul-item clearfix">
            <li class="li-item" v-for="item in partys">
              <router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}">
                <img v-if="item.img==null" src="../../assets/logo.jpg" class="logo_img" alt="">
                <img v-else :src="item.img" alt="">
                <p>{{item.title}}</p>
              </router-link>
            </li>
          </ul>
        </vue-seamless>
      </div>
    </div>
    <div class="center-wrap">
      <ul class="tabs">
        <li class="li-tab"
            v-for="(item,index) in tabsParam"
            @click="toggleTabs(index)"
            :class="{active:index!=nowIndex}">
          {{item}}
        </li>
        <div class="div-tab" v-show="nowIndex===0">
          <router-link :to="{path:'/news/list',query:{table:'announcement',type:10}}">更多 >></router-link>
          <ul>
            <li v-for="item in xinsheng"><router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </router-link></li>
          </ul>
        </div>
        <div class="div-tab" v-show="nowIndex===1">
          <router-link :to="{path:'/news/list',query:{table:'announcement',type:9}}">更多 >></router-link>
          <ul>
            <li v-for="item in homes"><router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}">
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </router-link></li>
          </ul>
        </div>
        <div class="div-tab" v-show="nowIndex===2">
          <a href="javascript:;">更多 >></a>
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
            
          }
        ],
        tabsParam: ['患者心声', '职工之家'],
        nowIndex: 0,
        xinsheng: [
         {
          }
        ],
        homes: [
         {
            
          }
        ],
        works: [
         {
            
          }
        ]
      }
    },
    components: {
      vueSeamless
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index
      },
      getList:function (limit,skip,type,table) {
        var that = this;
        var params = new URLSearchParams();
        params.append('limit', limit);
        params.append('skip', skip);
        params.append('query', JSON.stringify({type:type}));
        params.append('projection', JSON.stringify({"projection": {}}));
        params.append('collection', table);
        this.$axios({
          method: 'post',
          url:'/api/query',
          data:params
        })
          .then(
            function (res) {
              // console.log(res);
              res.data.data.map(function (item) {
                if(item.content.match(/<img[^>]+>/g)){
                  var imgs=item.content.match(/<img[^>]+>/g)
                  // var img1="http://localhost:8088"+imgs[0].replace('<img src="','').replace('">','');
                  // var host="http://localhost:8088";
                  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                  var img1=imgs[0].match(srcReg)[1];
                  // console.log(img1);
                  item.img=img1;
                }else{
                  item.url=null
                }
              })
              that.partys = res.data.data;
              // console.log(res.data.data)

            }
          )
          .catch()
      },
      getNews: function (limit,skip,type,table) {
        var that = this;
        var params = new URLSearchParams();
        params.append('limit', limit);
        params.append('skip', skip);
        params.append('query', JSON.stringify({type:type}));
        params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
        params.append('collection', table);
        this.$axios({
          method: 'post',
          url: '/api/query',
          data: params
        })
          .then(
            function (res) {
              // console.log(res);
              res.data.data.map(function (item) {
                // 将时间格式化你
                var time = new Date(item.time);
                item.time = time.toLocaleDateString().replace(/\//g, "-");
                item.title = item.title+'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ';
              });
              if(type==='9'){
                that.homes = res.data.data;
              }else if(type==='10'){
                that.xinsheng = res.data.data;
              }
            }
          )
          .catch()
      }
    },
    computed: {
      classOption5() {
        return {
          limitMoveNum: 4,
          direction: 2,
          step: 0.5,
          hoverStop: true,
          waitTime: 1000
        }
      },
    },
    created(){
      this.getList('4','0','7','announcement');
      this.getNews('6','0','9','announcement');
      this.getNews('6','0','10','announcement');
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
  @heightNav: 38px;
  @height: 178px;
  .party-center {
    width: 1000px;
    height: 300px;
    //background: @bgc;
    margin-top: 5px;
    .party-wrap {
      width: 622px;
      height: 300px;
      float: left;
      .party-head {
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
      .party-content {
        width: 100%;
        border: 1px solid @light;
        padding-bottom: 10px;
        .scroll-wrap {
          width: 620px;
          height: 250px;
          overflow: hidden;
          .ul-item {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 820px;
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
                width: 190px;
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
                .logo_img{
                  width: 180px;
                  height: 180px;
                  margin: 10px auto;
                }
                p {
                  width: 180px;
                  height: 38px;
                  line-height: 38px;
                  font-size: 14px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  box-sizing: border-box;
                  margin-top: 10px;
                  text-align: center;
                  color: @content;
                }
              }
            }
          }
        }
      }
    }
    .center-wrap {
      width: 370px;
      height: 300px;
      background: #fff;
      float: right;
      padding: 0;
      border: 0;
      .tabs {
        width: 370px;
        height: 38px;
        padding: 0;
        background: @primary;
        line-height: 38px;
        font-size: 20px;
        border: 0;
        .li-tab {
          border: 0;
          padding: 0;
          margin: 0;
          min-width: 80px;
          height: 36px;
          display: inline-block;
          text-align: center;
          border-left: 1px solid @light;
          background: #fff;
          color: @primary;
        }
        .div-tab {
          width: 370px;
          height: 262px;
          position: relative;
          padding-bottom: 18px;
          border: 1px solid @light;
          border-top: 0;
          & > a {
            color: @bgc;
            position: absolute;
            right: 18px;
            top: -38px;
            &:hover {
              color: red;
            }
          }
          ul {
            list-style: none;
            width: 370px;
            padding-top: 15px;
            li {
              display: block;
              width: 375px;
              height: 38px;
              line-height: 38px;

              a {
                display: block;
                color: @content;
                &:hover{
                  color: red;
                }
                span {
                  display: block;
                  height: 38px;
                  &:first-child {
                    float: left;
                    width: 260px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding-left: 10px;
                  }
                  &:last-child {
                    float: right;
                    width: 100px;
                  }
                }
              }
            }
          }
        }
        .active {
          background: @primary;
          color: #fff;
        }
      }

    }
  }
</style>
