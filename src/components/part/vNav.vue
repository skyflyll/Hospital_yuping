<template>
  <div class="nav">
    <div class="nav-wrap">
      <ul>
        <li v-for="item in nav">
          <a :href="item.url">{{item.name}}</a>
          <div class="nav-list" v-if="item.list">
            <ul>
              <li v-for="i in item.list"><a :href="i.url">{{i.name}}</a></li>
            </ul>
          </div>
          <div class="nav-important-list" v-else>
            <ul class="clear">
              <li v-for="i in item.importantList" class="clear">
                <p class="import-title">{{i.name}}</p>
                <div class="import-detail clear">
                  <span v-for="menu in i.importDetails"><a :href="menu.url">{{menu.name}}</a></span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-nav",
    props: '',
    data() {
      return {
        nav: [
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            importantList: [
              {
                name: 'CCCCCCCCCCCC',
                importDetails: [
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  }
                ]
              },
              {
                name: 'AAAAAAAAAAA',
                importDetails: [
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  }
                ]
              },
              {
                name: 'BBBBBBBBBBB',
                importDetails: [
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  },
                  {
                    url: 'javascript:;',
                    name: 'listllllllllll'
                  }
                ]
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          },
          {
            url: 'javascript:;',
            name: 'xxxxxxxxxx',
            list: [
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              },
              {
                url: 'javascript:;',
                name: 'listllllllllll'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @bgc: #2d8cf0;
  .clear::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }

  .nav {
    width: 100%;
    height: 45px;
    background: @bgc;
    .nav-wrap {
      height: 45px;
      width: 1000px;
      margin: 0 auto;
      background: @bgc;
      & > ul {
        list-style: none;
        & > li {
          float: left;
          width: 100px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          box-sizing: border-box;
          border-top: 1px solid @bgc;
          &:hover {
            background: #fff;
            .nav-list {
              display: block;
            }
            .nav-important-list {
              display: block;
            }
            a {
              color: red;
            }
          }
          & > a {
            color: #ffffff;
            text-decoration: none;
          }
          .nav-list {
            position: relative;
            z-index: 999;
            width: 101.5px;
            min-height: 0;
            border: 1px solid @bgc;
            box-sizing: border-box;
            border-top: 0;
            margin-left: -0.5px;
            margin-top: -2px;
            display: none;
            background: #ffffff;
            ul {
              list-style: none;
              width: 100px;
              box-sizing: border-box;
              li {
                height: 45px;
                line-height: 45px;
                &:hover {
                  background: @bgc;
                  a {
                    color: #fff;
                  }
                }
                a {
                  color: @bgc;
                  text-decoration: none;
                }
              }
            }
          }
          .nav-important-list {
            position: relative;
            width: 1000px;
            min-height: 300px;
            border: 1px solid @bgc;
            background: #ffffff;
            margin-left: -200px;
            z-index: 999;
            border-top: 0;
            margin-top: -1px;
            padding-bottom: 10px;
            padding-top: 10px;
            display: none;
            & > ul {
              list-style: none;
              & > li {
                text-align: left;
                display: block;
                .import-title {
                  color: @bgc;
                  font-size: 22px;
                  height: 38px;
                  width: 95%;
                  margin: 0 auto;
                  line-height: 38px;
                  border-bottom: 1px dashed @bgc;
                }
                .import-detail {
                  width: 95%;
                  margin: 0 auto;
                  span {
                    display: block;
                    float: left;
                    margin-right: 10px;
                    a {
                      text-decoration: none;
                      color: @bgc;
                      padding: 0 3px;
                      &:hover {
                        background: @bgc;
                        color: #fff;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
