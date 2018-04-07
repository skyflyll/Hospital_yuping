<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-nav clearfix">
        <ul>
          <li v-for="item in headerNavs"><a :href="item.href">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="header-logo clearfix">
        <div class="logo-wrap">
          <img src="" alt="logo-img">
          <div class="logo-detials">
            <h1>xxxxxxxxxxxxxxxxxxx</h1>
            <span>xxxxxxxxxxxxxxxxxxx</span>
          </div>
        </div>
        <div class="search-wrap">
          <div class="search">
            <Input v-model="value" placeholder="Enter something..." size="large" class="search-input"/>
            <Button type="primary" icon="ios-search" class="search-button" size="large">搜索</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-header",
    props: '',
    data() {
      return {
        input: '',
        value: '',
        headerNavs: [
          {
            name: "xxxxxxxx",
            href: "javascript:;"
          },
          {
            name: "xxxxxxxx",
            href: "javascript:;"
          },
          {
            name: "xxxxxxxx",
            href: "javascript:;"
          },
          {
            name: "xxxxxxxx",
            href: "javascript:;"
          },
          {
            name: "xxxxxxxx",
            href: "javascript:;"
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
  @heightNav: 38px;
  @height: 178px;
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  .header {
    width: 100%;
    height: @height;
    .header-wrap {
      height: @heightNav;
      width: 1000px;
      margin: 0 auto;
      background: @bgc;
      .header-nav {
        ul {
          list-style: none;
          float: right;
          li {
            height: @heightNav;
            line-height: @heightNav;
            width: 80px;
            float: left;
            a {
              text-decoration: none;
              font-size: 16px;
              color: @primary;
              width: 80px;
              text-align: center;
              &:hover {
                color: @light;
              }
            }
          }
        }
      }
      .header-logo {
        .logo-wrap {
          width: 500px;
          height: 140px;
          float: left;
          img {
            width: 120px;
            height: 120px;
            display: block;
            background: @bgc;
            float: left;
            vertical-align: middle;
            margin-top: 10px;
          }
          .logo-detials {
            width: 380px;
            float: right;
            padding-left: 10px;
            h1 {
              &:first-child {
                margin-top: 30px;
                font-size: 30px;
              }
            }
          }
        }
        .search-wrap {
          width: 500px;
          height: 100px;
          float: right;
          box-sizing: border-box;
          padding-top: 50px;
          .search {
            float: right;
            .search-input {
              width: 380px;
              .ivu-input {
                height: 45px;
              }
            }
            .search-button {
              width: 100px;
            }
          }
        }
      }
    }
  }
</style>
