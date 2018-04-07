<template>
  <div class="information">

    <div class="recruit">
      <div class="recruit-head">
        <h2>xxxxxxxx</h2>
        <a href="javascript:;">more >></a>
      </div>
      <div class="recruit-content">
        <ul>
          <li v-for="item in recruits">
            <a href="javascript:;">
              <span>{{item.title}}</span>
              <span>- - - - - - - -</span>
              <span>{{item.time}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="lecture">
      <div class="lecture-head">
        <h2>xxxxxxxx</h2>
        <a href="javascript:;">more >></a>
      </div>
      <div class="lecture-content">
        <ul>
          <li v-for="item in lectures">
            <a href="javascript:;">
              <span>{{item.title}}</span>
              <span>- - - - - - - -</span>
              <span>{{item.time}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "v-information",
    data() {
      return {
        recruits:[
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          }

        ],
        lectures:[
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },
          {
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          },{
            title:'xxxxxxxxxxxxxxxxxxxxxxxxx',
            time:'2018-03-16',
            href:'javascript',
          }

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
  @border: #dddee1;
  .header{
    background: @primary;
    width: 100%;
    height: 45px;
    line-height: 45px;
    h2{
      float: left;
      display: block;
      font-size: 18px;
      margin-left: 5px;
      color: @bgc;
    }
    a{
      display: block;
      float: right;
      margin-right: 10px;
      color: @bgc;
    }
  }
  .content{
    min-height: 250px;
    ul{
      list-style: none;
      li{
        height: 38px;
        line-height: 38px;
        a{
          font-size: 18px;
          word-spacing: 5px;
          span{
            display: block;
            float: left;
            height: 38px;
            line-height: 38px;
            overflow: hidden;
            &:first-child{
              width: 280px;
              padding-left: 10px;
              padding-right: 10px;
              margin-right: 10px;
            }
            &:nth-child(2){
              width: 100px;
            }
            &:last-child{
              text-align: center;
              width: 95px;
            }
          }
        }

      }
    }
  }
  .information {
    width: 1000px;
    margin: 0 auto;
    height: 300px;
    background: @bgc;
    padding-bottom: 10px;
    .recruit{
      width: 495px;
      min-height: 250px;
      background: @border;
      float: left;
      .recruit-head{
        .header
      }
      .recruit-content{
        .content
      }
    }
    .lecture{
      width: 495px;
      min-height: 250px;
      background: @border;
      float: right;
      .lecture-head{
        .header
      }
      .lecture-content{
        .content
      }
    }
  }
</style>
