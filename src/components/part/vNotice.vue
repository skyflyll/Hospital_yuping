<template>
  <div class="notice">
    <div class="notice-wrap">
      <div class="notice-title">公告：
        <Icon type="volume-high"></Icon>
      </div>
      <div class="notice-main">
          <v-scroll></v-scroll>
      </div>
    </div>
    <div class="time-wrap">{{ showTime }}</div>
  </div>
</template>

<script>
  import vScroll from './vScroll'
  export default {
    name: "v-notice",
    props: '',
    components:{
      vScroll,
    },
    data() {
      return {
        year: '',
        month: '',
        date: '',
        hour: '',
        minutes: '',
        seconds: '',
        week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        day: '',
      }
    },
    methods: {
      zeroPadding: function (num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      },
      updateTime: function () {
        var today = new Date();
        this.year = this.zeroPadding(today.getFullYear(), 4);
        this.month = this.zeroPadding(today.getMonth() + 1, 2);
        this.date = this.zeroPadding(today.getDate(), 2);
        this.hour = this.zeroPadding(today.getHours(), 2);
        this.minutes = this.zeroPadding(today.getMinutes(), 2);
        this.seconds = this.zeroPadding(today.getSeconds(), 2);
        this.day = this.week[today.getDay()];
        return this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minutes + ":" + this.seconds + " " + this.day;
      }
    },
    computed: {
      showTime: function () {
        return this.updateTime()
      },
    },
    created(){
      console.log('jjjjjjj');
      var times= setInterval(this.updateTime,1000)
    }
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
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  .notice {
    width: 1000px;
    height: 38px;
    margin: 0 auto;
    background: @bgc;
    .notice-wrap {
      width: 800px;
      float: left;
      .notice-title {
        width: 80px;
        height: 38px;
        float: left;
        font-size: 14px;
        line-height: 38px;
        box-sizing: border-box;
        padding-left: 5px;
        border-right: 1px solid @border;
      }
      .notice-main {
        width: 720px;
        float: right;
        height: 38px;
        line-height: 38px;
        border-right: 1px solid @border;

      }
    }
    .time-wrap {
      width: 200px;
      float: right;
      height: 38px;
      line-height: 38px;
      font-size: 14px;
      text-align: center;
    }

  }
</style>
