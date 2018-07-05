<template>
  <div class="swipt">
    <Carousel v-model="value1" loop >
      <CarouselItem v-for="(item,index) in banners" :key="item.index">
        <div class="demo-carousel">
          <a :href="item.href"><img :src="item.url" alt=""></a>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
  export default {
    name:'v-swipt',
    data () {
      return {
        value1: 1,
        banners:[
          {
            url:require('../../assets/banner.jpg'),
            href:'javascript:;',
            title:"xxxxxxxxxxxxxxx"
          },{
            url:require('../../assets/banner1.jpg'),
            href:'javascript:;',
            title:"xxxxxxxxxxxxxxx"
          },{
            url:require('../../assets/banner2.jpg'),
            href:'javascript:;',
            title:"xxxxxxxxxxxxxxx"
          },{
            url:require('../../assets/banner3.jpg'),
            href:'javascript:;',
            title:"xxxxxxxxxxxxxxx"
          }
          ]
      }
    },
    methods:{

    },
    created(){
      var that = this;
      var params = new URLSearchParams();
      params.append('limit', '5');
      params.append('skip', '0');
      params.append('query', JSON.stringify({}));
      params.append('projection', JSON.stringify({"projection": {"content": 0,"writer":0,"source":0}}));
      params.append('collection', 'homeBanner');
      this.$axios({
        method: 'post',
        url:'/api/query',
        data:params
      })
        .then(
          function (res) {
            // console.log(res);
            res.data.data.map(function (item) {
              item.url=item.src.replace("wwwroot","http://localhost:8088");
              // console.log(item.url)
            })
            that.banners= res.data.data;
          }
        )
        .catch()
    }
  }
</script>
<style lang="less" scoped>
img{
  display: block;
  width: 1000px;
}
</style>
