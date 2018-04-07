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
    }
  }
</script>
<style lang="less" scoped>
img{
  display: block;
  width: 1000px;
}
</style>
