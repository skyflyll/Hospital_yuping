<template>
  <div class="honor">
    <div class="honor-head">
      <h2>医院荣誉</h2>
      <span><router-link :to="{path:'/news/list?table=announcement&type=8'}">更多 >></router-link></span>
    </div>
    <vue-seamless :data="notices" :class-option="classOption5" class="scroll-wrap">
      <ul class="ul-item clearfix">
        <li class="li-item" v-for="item in notices">
          <router-link :to="{ path: '/news/detail',query:{table:'announcement',id:item._id}}">
            <img :src="item.url" alt="img">
            <p>{{item.title}}</p>
          </router-link>
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
    methods:{
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
                var imgs=item.content.match(/<img[^>]+>/g)
                // var img1="http://localhost:8088"+imgs[0].replace('<img src="','').replace('">','');
                var host="http://localhost:8088";
                var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                var img1=imgs[0].match(srcReg)[1];
                if(!/^http/.test(img1)){
                  img1=host+imgs[0].match(srcReg)[1];
                }
                // console.log(img1);
                item.url=img1;
              })
              that.notices = res.data.data;
              // console.log(res.data.data)

            }
          )
          .catch()
      },
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
      this.getList('4','0','8','announcement')
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
      width: 1002px;
      height: 250px;
      overflow: hidden;
      padding-top: 5px;
      border: 2px solid @shadow;
      border-top: 1px solid @light;
      .ul-item {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 1240px;
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
