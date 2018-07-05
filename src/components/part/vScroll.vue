<template>
  <vue-seamless :data="notices" :class-option="classOption5" class="scroll-wrap">
    <ul class="ul-item clearfix">
      <li class="li-item" v-for="item in notices">
        <router-link :to="{path:'/news/detail',query:{table:'announcement',id:item._id}}">
          <p>{{item.title}}</p>
          <p>- - {{item.time}}</p>
        </router-link>
      </li>
    </ul>
  </vue-seamless>
</template>

<script>
  import vueSeamless from 'vue-seamless-scroll'
  export default {
    components: {
      vueSeamless
    },
    data() {
      return {
        listData5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        notices:[
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'/javascript:;'
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'/javascript:;'
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'/javascript:;'
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'/javascript:;'
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-19',
            href:'/javascript:;'
          }
          ]
      }
    },
    computed: {
      classOption5() {
        return {
          limitMoveNum: 4,
          direction: 2,
          step:1,
          hoverStop: true,
          waitTime: 1000
        }
      },
    },
    methods: {

    },
    created() {
      // setTimeout(() => {
      //   this.listData5 = [1, 2, 3, 4, 5,6,7,8,9,10]
      // }, 3000)
      var that = this;
      var params = new URLSearchParams();
      params.append('limit', '5');
      params.append('skip', '0');
      params.append('query', JSON.stringify({"type":"1"}));
      params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
      params.append('collection', 'announcement');
      this.$axios({
        method: 'post',
        url:'/api/query',
        data:params
      })
        .then(
          function (res) {
            // console.log(res);
            that.notices=res.data.data
            that.notices.map(function (item) {
              var time = new Date(item.time);
              item.time=time.toLocaleDateString().replace(/\//g, "-");

              // console.log(item.time)
            });
            // console.log(timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8));
          }
        )
        .catch()
    }
  }
</script>
<style lang="less" scoped>
  @color:#657180;
  .scroll-wrap {
    width: 720px;
    height: 38px;
    overflow: hidden;
    .ul-item {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 1550px;
      .li-item {
        float: left;
        width: 300px;
        height: 38px;
        margin: 0 0 0 10px;
        line-height: 38px;
        /*background-color: lightgray;*/
        font-family: 'Amaranth', sans-serif;
        font-size: 20px;
        overflow: hidden;
        padding: 0 5px;
        a{
          width:300px;
          border: 0;
          padding: 0;
          margin: 0;
          display: block;
          height: 38px;
          color: @color;
          &:hover{
            color: red;
          }
          &:visited{
            /*color: red;*/
          }
          p{
            border: 0;
            padding: 0;
            display: block;
            float: left;
            &:first-child{
              width: 180px;
              float: left;
              text-align: left;
              height: 38px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:last-child{
              width: 110px;
              float: right;
              text-align: left;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
</style>
