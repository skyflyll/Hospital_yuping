<template>
  <div class="expert">
    <div class="expert-head">
      <h2>xxxxxxxxxxxxx</h2>
      <span><a href="javascript:;">more >></a></span>
    </div>
    <div class="expert-content">
      <div class="expert-wrap" v-for="item in exports">
        <img :src="item.url" alt="img">
        <div class="expert-introduce">
          <p>xxxxx:{{item.name}}</p>
          <p>xxxxx:{{item.department}}</p>
          <p>xxxxx:{{item.position}}</p>
          <p>xxxxx:{{item.title}}</p>
          <div class="btn">
            <a href=""><Button type="primary" size="small">{{item.introduce}}</Button></a>
            <a href=""><Button type="primary" size="small">{{item.out}}</Button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-expert",
    data(){
      return{
        exports:[
          {
            url:require('../../assets/logo.png'),
            name:'linlang',
            department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },{
            url:require('../../assets/logo.png'),
            name:'linlang',
            Department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },{
            url:require('../../assets/logo.png'),
            name:'linlang',
            Department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },{
            url:require('../../assets/logo.png'),
            name:'linlang',
            Department:'xxxxxxxx',
            position:'xxxxxxxx',
            title:'xxxxxxx',
            introduce:'xxxx',
            out:'xxxxx'
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @border:#dddee1;
  .expert {
    width: 1000px;
    margin: 0 auto;
    height: 230px;
    margin-top: 10px;
    .expert-head{
      width: 100%;
      height: 45px;
      box-sizing: border-box;
      border-bottom: 1px solid @primary;
      line-height: 45px;
      background: @primary;
      h2{
        float: left;
        display: block;
        margin-left: 5px;
        font-size: 18px;
        color: @bgc;
      }
      span{
        display: block;
        float: right;
        margin-right: 5px;
        a{
          color: @bgc;
        }
      }
    }
    .expert-content{
      width: 100%;
      height: 180px;
      margin-top: 5px;
      .expert-wrap{
        width: 245px;
        height: 180px;
        box-sizing: border-box;
        box-shadow: 2px 2px 2px @bgc;
        border-radius: 3px;
        float: left;
        margin-right: 5px;
        background: @bgc;
        &:first-child{
          margin-left: 2.5px;
        }
        &:last-child{
          margin-right: 2.5px;
        }
        &:hover{
          box-shadow: 3px 3px 3px @border;
        }
        img{
          display: block;
          width: 100px;
          height: 151px;
          background: @border;
          float: left;
          margin-top: 15px;
          border-radius: 5px;
          margin-left: 6px;
          &:hover{
            box-shadow: 2px 2px 2px @border;
          }
        }
        .expert-introduce{
          width: 130px;
          float: right;
          height: 180px;
          padding-top: 18px;
          p{
              font-size: 18px;
          }
          .btn{
            width: 100%;
            margin-top: 15px;
            a{
              float: left;
              display: block;
              padding: 0;
              margin: 0;
              &:first-child{
                width: 50px;
              }
              &:last-child{
                width: 80px;
              }
            }
          }
        }
      }
    }
  }
</style>
