<template>
  <div id="app">
    <v-head></v-head>
    <v-nav></v-nav>
    <v-notice></v-notice>
    <router-view/>
    <v-footer></v-footer>
    <!-- 返回顶部 -->
    <Back-top :bottom="50">
      <div class="back-top">
        <Icon type="chevron-up"></Icon>
        <div>返回<br/>顶端</div>
      </div>
    </Back-top>
    <!-- 聊天窗口 -->
    <div class="chat-wrap" @click="toggleChat()">
      <div class="avatar-badge">
        <Badge dot>
          <Avatar shape="square" icon="chatbubble-working"/>
        </Badge>
      </div>
      <span>在线咨询</span>
    </div>
    <div class="window-chat" v-show="show">
      <div class="left" id="listNode" @click="changeUser()">
        <h2>在线人员</h2>
      </div>
      <div class="right">
        <div class="chat-head">
          <Icon type="chatbubbles"></Icon>
          <span class="personnel">在线咨询</span>
          <span @click="toggleChat()"><Icon type="close-round"></Icon></span>
        </div>
        <div class="chat-content" ref="content">
          <ul class="content-wrap">
            <li class="content clearfix" v-for="(item,index) in chats">
              <div v-if="item.user" class="user" ref="">
                <Icon type="chatbox-working"></Icon>
                <span>
                  <span>{{item.time}}</span>
                  <span v-html="item.content"></span>
                </span>
              </div>
              <div v-else-if="item.admin" class="admin">
                <Icon type="chatbox-working"></Icon>
                <span>
                  <span>{{item.time}}</span>
                  <span v-html="item.content"></span>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="chat-input">
          <div class="input" ref="inputValue" id="msgNode" contenteditable="true"></div>
          <div class="submit">
            <input type="file" class="ivu-upload" id="imgNode">
            <!-- <Button type="info" v-if="userInput === ''" size="small" disabled>发送</Button> -->
            <Button type="primary" @click="send()" size="small" id="sendNode">发送</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vHead from './components/part/vHead' //头部
  import vNav from './components/part/vNav' //导航
  import vFooter from './components/part/vFooter' //脚步
  import vNotice from './components/part/vNotice' //公告
  // import chat from './components/part/chat.js' // 聊天js

  export default {
    name: 'App',
    data() {
      return {
        listNode: '',
        scrtop: 0,
        show: false,
        count: "1",
        userInput: "",
        localStorageUsers:'',
        activeUser:'',
        chats: []
      }
    },
    components: {
      'v-head': vHead,
      'v-nav': vNav,
      'v-notice': vNotice,
      'v-footer': vFooter,
    },
    beforeCreate() {

    },
    methods: {
      changeUser:function(){
        // console.log('sssssssssssssss')
        this.activeUser = localStorage.getItem('activeUser')
      },
      change(status) {
        this.$Message.info(`Status: ${status}`);
      },
      toggleChat: function () {
        this.show = !this.show;

        // console.log(this.show);
      },
      send: function () {
        let that = this;
        let chat = {};
        console.log('hhhhhhhhhhhh', this.$refs.inputValue);
        // console.log()
        // this.userInput = this.$refs.inputValue.innerHTML;
        chat.content = this.$refs.inputValue.innerHTML;
        let username;
        let cookie = document.cookie.split(";");
        cookie.map(function (item) {
          if (/usn/g.test(item)) {
            username = item.split("=")[1];
            chat.user = username;
          }
        });
        chat.time = this.getNowFormatDate();
        let activeUser = localStorage.getItem('activeUser')
        this.localStorageUsers = username+'&'+activeUser;
        let chats = !localStorage.getItem(username+'&'+activeUser)?[]:JSON.parse(localStorage.getItem(username+'&'+activeUser));
        chats.push(chat);
        this.chats = chats;
        localStorage.setItem(username+'&'+activeUser,JSON.stringify(chats));
        // console.log(this.$refs.content);
        let time = setTimeout(function () {
          that.scrtop = that.$refs.content.scrollHeight - that.$refs.content.offsetHeight;
        }, 10);
      },
      // 获取时间
      getNowFormatDate: function() {
        let date = new Date();
        let seperator1 = "-";
        let seperator2 = ":";
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        let currentdate = date.getHours() + seperator2 + date.getMinutes();
        return currentdate;
      },
      // 获取消息
      getNews: function (type) {
        let that = this;
        let params = new URLSearchParams();
        params.append('query', JSON.stringify({type: type}));
        params.append('projection', JSON.stringify({"projection": {"content": 0, "writer": 0, "source": 0}}));
        params.append('collection', 'person');
        this.$axios({
          method: 'post',
          url: '/api/query',
          data: params
        })
          .then(
            function (res) {
              console.log('=======',res);
            }
          )
          .catch()
      },
    },
    watch: {
      scrtop: function () {
        console.log(this.scrtop);
        this.$refs.content.scrollTop = this.scrtop;
      },
      activeUser: function (){

        let username;
        let cookie = document.cookie.split(";");
        cookie.map(function (item) {
          if (/usn/g.test(item)) {
            username = item.split("=")[1];
          }
        });
        
        let activeUser = localStorage.getItem('activeUser')
        this.localStorageUsers = username+'&'+activeUser;
        let chats = !localStorage.getItem(username+'&'+activeUser)?[]:JSON.parse(localStorage.getItem(username+'&'+activeUser));
        // console.log(chats)
        this.chats = chats;
      }
    },
    created() {
      // this.getNews('1');
      // this.scrtop = this.$refs.content.scrollHeight - this.$refs.content.offsetHeight;···
      // let chats = localStorage.getItem(this.localStorageUsers);
      // this.chats =JSON.parse(chats);
      // console.log('-------------',chats);
      let ws = new WebSocket("ws://localhost:8088");
      ws.onopen = function(){
        ws.onclose = function(){
          console.log('dddddddddddd')
        }
        ws.onmessage = function(ev){
          try {
            // center(JSON.parse(ev.data));
            console.log('llllllllllllllll',ev)

          } catch (e) {
            console.error(e);
          }
        }
      }

    }
  }
</script>

<style lang="less">
  @content: #657180;
  @text: #464c5b;
  @disable: #464c5b;
  @sub: #9ea7b4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @shadow: #e3e8ee;
  @heightNav: 38px;
  @height: 178px;
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
  }

  .back-top {
    width: 45px;
    font-size: 15px;
    background: @primary;
    text-align: center;
    padding-bottom: 5px;
    color: @bgc;
    font-weight: 800;
    border-radius: 5px;
    &:hover {
      box-shadow: 3px 3px 3px @bgc;
      background: @light;
    }
  }

  .chat-wrap {
    background: #2d8cf0;
    position: fixed;
    display: block;
    right: 30px;
    height: 45px;
    bottom: 200px;
    width: 45px;
    border-radius: 10px;
    .avatar-badge {
      width: 45px;
      height: 45px;
      span {
        width: 45px;
        height: 45px;
        background: @primary;
        border-radius: 5px;
        i {
          font-size: 30px;
          line-height: 45px;
        }
      }
    }
    & > span {
      display: block;
      width: 60px;
      position: relative;
      left: -6px;
      top: 6px;
      color: red;
      font-weight: 500;
    }
  }

  .window-chat {
    width: 500px;
    height: 500px;
    background: #fff;
    position: fixed;
    right: 100px;
    bottom: 10px;
    z-index: 30;
    border: 1px solid @light;
    .left {
      width: 170px;
      height: 498px;
      background: @bgc;
      float: left;
      h2 {
        color: red;
        height: 38px;
        list-style: none;
        line-height: 38px;
        padding-left: 10px;
        font-size: 18px;
        box-shadow: 0 -5px 5px @shadow inset;
        background: url("./assets/headBg.jpg");
      }
      li {
        color: @content;
        height: 38px;
        list-style: none;
        line-height: 38px;
        padding-left: 10px;
        margin: 5px 0;
        box-shadow: 0 -5px 5px @shadow inset;
        background: url("./assets/headBg.jpg");
        cursor: pointer;
        &:hover {
          box-shadow: 5px 5px 5px @shadow;
        }
        &:active {
          box-shadow: 0 -5px 5px @shadow inset;
        }
      }
    }
    .right {
      width: 328px;
      float: right;
      .chat-head {
        height: 38px;
        background: @primary;
        padding-left: 10px;
        color: @bgc;
        box-sizing: content-box;
        border-bottom: 1px solid @bgc;
        box-shadow: 0 1px 1px @bgc;
        font-size: 18px;
        & > i {
          font-size: 18px;
          margin-right: 10px;
          height: 38px;
          line-height: 38px;
          &:hover {
            color: red;
          }
        }
        & > span {
          font-size: 18px;
          &:last-child {
            float: right;
            font-size: 18px;
            font-weight: lighter;
            margin-right: 12px;
            display: inline-block;
            &:hover {
              color: red;
            }
          }
        }
      }
      .chat-content {
        height: 312px;
        background: #fff;
        border: 2px solid @bgc;
        border-top: 0;
        overflow: auto;
        padding-bottom: 10px;
        .content-wrap {
          list-style: none;
          .content {
            width: 100%;
            line-height: 50px;
            padding: 0 10px;
            .user {
              display: block;
              float: right;
              margin: 10px 0;
              width: 100%;
              text-align: left;
              i {
                font-size: 30px;
                float: right;
                vertical-align: top;
                width: 20px;
              }
              & > span {
                display: inline-block;
                vertical-align: top;
                max-width: 80%;
                float: right;
                margin: 0 8px;
                & > span {
                  display: block;
                  text-align: right;
                  line-height: 30px;
                  font-size: 18px;
                  width: 100%;
                  word-wrap: break-word;
                  word-break: break-all;
                  &:last-child {
                    padding: 5px 8px;
                    border: 1px solid #e3e3e3;
                    border-radius: 5px;
                    background: @bgc;
                    color: #808080;
                    text-align: left;
                    img {
                      width: 100%;
                    }
                  }
                  &:first-child {
                    height: 18px;
                    line-height: 18px;
                    font-size: 12px;
                    overflow-x: hidden;
                    img {
                      width: 100%;
                    }
                  }
                }
              }
            }
            .admin {
              display: block;
              float: left;
              margin: 10px 0;
              width: 100%;
              i {
                font-size: 30px;
                float: left;
                vertical-align: top;
                width: 20px;
                transform: rotateY(180deg);
              }
              & > span {
                display: inline-block;
                vertical-align: top;
                max-width: 80%;
                float: left;
                margin: 0 8px;
                & > span {
                  display: block;
                  text-align: left;
                  line-height: 30px;
                  font-size: 18px;
                  width: 100%;
                  word-wrap: break-word;
                  word-break: break-all;
                  &:last-child {
                    padding: 5px 8px;
                    border: 1px solid #e3e3e3;
                    border-radius: 5px;
                    background: @bgc;
                    color: #808080;
                  }
                  &:first-child {
                    height: 18px;
                    line-height: 18px;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
      .chat-input {
        height: 150px;
        padding: 1px;
        .input {
          display: block;
          width: 100%;
          background: #fff;
          height: 100px;
          outline: none;
          resize: none;
          padding: 2px 5px;
          border: 1px solid #e3e3e3;
          overflow-x: hidden;
          overflow-y: auto;

        }
        .submit {
          padding-top: 8px;
          & > button {
            float: right;
            /*width: 40%;*/
            margin-right: 8px;
          }
          .ivu-upload {
            float: left;
            width: 80%;
            margin-left: 8px;
          }
        }
      }
    }
  }

  #app {
  }
</style>
