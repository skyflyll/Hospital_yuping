<template>
  <div class="department">
    <div class="department-head">
      <h2>XXXXXXXXXX</h2>
      <span><a href="javascript:;">more >></a></span>
    </div>
    <div class="department-content">
      <div class="department-wrap" v-for="item in departments">
        <a :href="item.href"><h1>{{item.title}}</h1></a>
        <div class="content-wrap">
          <span v-for="i in item.details">
          <a :href="i.href"><Icon type="plus-round"></Icon> {{i.name}}</a>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-department",
    data() {
      return {
        departments: [
          {
            title: "XXXXcc",
            href: 'javascript:;',
            details: [
              {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              },
            ]
          },
          {
            title: "XXXXXcc",
            href: 'javascript:;',
            details: [
              {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              },
            ]
          },
          {
            title: "XXXXcc",
            href: 'javascript:;',
            details: [
              {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              }, {
                name: 'xxxxxx',
                href: 'javascriot:;'
              },
            ]
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
  @border: #dddee1;
  .department {
    width: 1000px;
    margin: 13px auto;
    min-height: 410px;
    .department-head {
      width: 100%;
      height: 45px;
      background: @primary;
      border-bottom: 1px solid @primary;
      line-height: 45px;
      h2 {
        display: block;
        float: left;
        padding-left: 5px;
        color: @bgc;
      }
      span {
        display: block;
        float: right;
        padding-right: 5px;
        a {
          color: @bgc;
        }
      }
    }
    .department-content {
      width: 100%;
      min-height: 360px;
      margin-top: 5px;
      padding-bottom: 5px;
      .department-wrap {
        width: 100%;
        margin: 0 auto;
        min-height: 120px;
        border: 1px dashed @primary;
        margin-top: 5px;
        border-radius: 10px;
        background: @bgc;
        h1 {
          width: 15%;
          display: block;
          float: left;
          text-align: center;
          line-height: 120px;
        }
        .content-wrap {
          width: 85%;
          float: right;
          padding: 10px;
          a {
            display: block;
            margin: 5px;
            padding: 1px 5px;
            float: left;
            border-radius: 3px;
            &:hover {
              background: @primary;
              color: @bgc;
            }
            &:active {
              background: @light;
            }
          }
        }
      }

    }

  }
</style>
