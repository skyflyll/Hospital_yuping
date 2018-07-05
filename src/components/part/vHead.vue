<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-nav clearfix">
        <ul>
          <li v-if="userName==='false'">
            <a href="javascript:;" @click="modalLogin = true;">
              <span @click="showLogin">登录</span>
            </a>
            <Modal v-model="modalLogin" width="500px">
              <p slot="header" style="color:#2d8cf0;text-align:center;font-size: 18px">
                <span>用户登录</span>
              </p>
              <div style="text-align:center">
                <Form ref="formLogin" :model="formLogin" :rules="ruleValidate" :label-width="100">
                  <FormItem label="手机号：" prop="phone">
                    <Input v-model="formLogin.phone" placeholder="输入用户名/手机号"></Input>
                  </FormItem>
                  <FormItem label="密码：" prop="password">
                    <Input v-model="formLogin.password" type="password" placeholder="输入密码"></Input>
                  </FormItem>

                  <FormItem label="验证码：">
                    <Row>
                      <Col span="11">
                      <FormItem prop="code">
                        <Input v-model="formLogin.code" placeholder="输入密码"></Input>
                      </FormItem>
                      </Col>
                      <Col span="11">
                      <img @click="changeCode" :src="code" alt="dddd">
                      </Col>
                    </Row>
                    <!--<Input v-model="formLogin.code" placeholder="输入密码"></Input>-->
                  </FormItem>
                  <Button type="primary" @click="handleLogin('formLogin')">立即注册</Button>
                  <Button type="ghost" @click="handleReset('formLogin')" style="margin-left: 8px">重置</Button>
                </Form>
              </div>
              <div slot="footer">
                <span style="cursor: pointer" @click="toSign">还没注册&nbsp;<strong
                  style="color: #2d8cf0">去注册</strong></span>&nbsp;&nbsp;
                <span style="cursor: pointer" @click="toBack">忘记密码&nbsp;<strong
                  style="color: #2d8cf0">去找回</strong></span>
              </div>
            </Modal>
            &nbsp;
            <a href="javascript:;" @click="modalSign = true">
              注册
            </a>
            <Modal v-model="modalSign" width="500px">
              <p slot="header" style="color:#2d8cf0;text-align:center;font-size: 18px">
                <span>用户注册</span>
              </p>
              <div style="text-align:center">
                <Form ref="formSign" :model="formSign" :rules="ruleValidate" :label-width="100">
                  <FormItem label="用户名：" prop="name">
                    <Input v-model="formSign.name" placeholder="输入用户名/手机号"></Input>
                  </FormItem>
                  <FormItem label="手机号：" prop="phone">
                    <Input v-model="formSign.phone" placeholder="输入用户名/手机号"></Input>
                  </FormItem>
                  <FormItem label="密码：" prop="password">
                    <Input v-model="formSign.password" type="password" placeholder="输入密码"></Input>
                  </FormItem>
                  <FormItem label="确认密码：" prop="password">
                    <Input v-model="formSign.rpassword" type="password" placeholder="重新输入密码"></Input>
                  </FormItem>
                  <Button type="primary" @click="handleSign('formSign')">立即注册</Button>
                  <Button type="ghost" @click="handleReset('formSign')" style="margin-left: 8px">重置</Button>
                </Form>
              </div>
              <div slot="footer">
                <span style="cursor: pointer" @click="toLogin">已经注册&nbsp;<strong
                  style="color: #2d8cf0">去登录</strong></span>&nbsp;&nbsp;
                <span style="cursor: pointer" @click="toBack">忘记密码&nbsp;<strong
                  style="color: #2d8cf0">去找回</strong></span>
              </div>
            </Modal>
            <!--找回密码-->
            <Modal v-model="modalBack" width="500px">
              <p slot="header" style="color:#2d8cf0;text-align:center;font-size: 18px">
                <span>找回密码</span>
              </p>
              <div style="text-align:center">
                <Form ref="formBack" :model="formBack" :rules="ruleValidate" :label-width="100">
                  <FormItem label="手机号：" prop="phone">
                    <Input v-model="formBack.phone" placeholder="输入用户名/手机号"></Input>
                  </FormItem>
                  <FormItem label="新密码：" prop="password">
                    <Input v-model="formBack.password" type="password" placeholder="新密码"></Input>
                  </FormItem>
                  <FormItem label="确认密码：" prop="password">
                    <Input v-model="formBack.rpassword" type="password" placeholder="重新输入新密码"></Input>
                  </FormItem>
                  <Button type="primary" @click="handleBack('formBack')">提交找回</Button>
                  <Button type="ghost" @click="handleReset('formBack')" style="margin-left: 8px">重置</Button>
                </Form>
              </div>
              <div slot="footer">
                <span style="cursor: pointer" @click="toLogin">已经注册&nbsp;<strong
                  style="color: #2d8cf0">去登录</strong></span>&nbsp;&nbsp;
                <span style="cursor: pointer" @click="toSign">没有注册&nbsp;<strong
                  style="color: #2d8cf0">去注册</strong></span>
              </div>
            </Modal>
          </li>
          <li v-else>
            <a href="javascript:;">
              <Icon type="person-add"></Icon>&nbsp;&nbsp;{{userName}}</a>
            <a href="javascript:;" @click="loginOut">注销</a>
          </li>
          <li>
            <router-link :to="{path:'/news/list',query:{table:'announcement',type:3}}">人才招聘</router-link>
          </li>
          <!--<li v-for="item in headerNavs"><a :href="item.href">{{item.name}}</a></li>-->
        </ul>
      </div>
      <div class="header-logo clearfix">
        <div class="logo-wrap">
          <img src="../../assets/logo.jpg" alt="logo-img">
          <div class="logo-detials">
            <h1>玉屏侗族自治县人民医院</h1>
            <span>Yuping Dong Nationality Autonomous County People's Hospital</span>
          </div>
        </div>
        <div class="search-wrap">
          <div class="search">
            <Input v-model="value" placeholder="输入内容" size="large" class="search-input"/>
            <Button type="primary" icon="ios-search" class="search-button" size="large">搜索</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';

  export default {
    name: "v-header",
    props: '',
    data() {
      return {
        userName: 'false',
        modalLogin: false,
        modalSign: false,
        modalBack: false,
        code: '',
        formSign: {
          name: '',
          password: '',
          rpassword: '',
          phone: '',
        },
        formLogin: {
          password: '',
          phone: '',
          code: ''
        },
        formBack: {
          password: '',
          phone: '',
          rpassword: '',
        },
        ruleValidate: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {
              type: 'string',
              pattern: /^[0-9a-zA-Z\u4e00-\u9fa5_]{3,18}$/,
              message: '请正确输入3-18个字符(数字字母下划线)的用户名',
              trigger: 'blur'
            },
          ],
          password: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {type: 'string', min: 6, max: 18, message: '请输入6-16的密码', trigger: 'blur'},
            {pattern: /^[0-9a-zA-Z_\-\.]+$/, message: '请正确输入用户密码', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {
              type: 'string',
              pattern: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
              message: '请正确输入手机号',
              trigger: 'blur'
            }
          ],
          code: [
            {required: true, message: '请输入5位验证码', trigger: 'blur'},
            {
              type: 'string',
              pattern: /^[0-9a-zA-Z]{5}$/,
              message: '请正确输入5个验证码',
              trigger: 'blur'
            },
          ]
        },
        input: '',
        value: '',
        headerNavs: [
          {
            name: "注册",
            href: "javascript:;"
          },
          {
            name: "登录",
            href: "javascript:;"
          },
          {
            name: "媒体中心",
            href: "javascript:;"
          },
          {
            name: "人才招聘",
            href: "javascript:;"
          }
        ]
      }
    },
    methods: {
      changeCode: function () {
        var now = new Date();
        this.code = '/api/code?time=' + now;
      },
      loginOut: function () {
        var that = this;
        this.$axios({
          method: 'get',
          url: '/api/logout2',
        }).then(function (res) {
          console.log(res)
          that.userName = 'false';
        })
      },
      showLogin: function () {
        // this.modalLogin = true;
        var now = new Date();
        this.code = '/api/code?time=' + now;
      },
      handleLogin(name) {
        var that = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            var password = that.$refs.formLogin.model.password;
            var phone = that.$refs.formLogin.model.phone;
            var code = that.$refs.formLogin.model.code;
            var params = new URLSearchParams();
            params.append('uid', phone);
            params.append('pwd', password);
            params.append('code', code);
            that.$axios({
              method: 'post',
              url: '/api/login2',
              data: params
            })
              .then(
                function (res) {
                  console.log(res);
                  that.modalLogin = false;
                  that.$Message.success('登录成功!');
                  // setTimeout(function () {
                  //   window.location.reload()
                  // },2000)
                }
              )
              .catch(function () {
                that.show = false;
              });
          } else {
            this.$Message.error('用户信息填写错误');
          }
        })
      },
      handleSign(name) {
        var that = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (that.$refs.formSign.model.password === that.$refs.formSign.model.rpassword) {
              // usn(显示名), uid(电话号码), pwd(密码)
              var password = that.$refs.formSign.model.password;
              var phone = that.$refs.formSign.model.phone;
              var name = that.$refs.formSign.model.name;
              var params = new URLSearchParams();
              params.append('usn', name);
              params.append('uid', phone);
              params.append('pwd', password);
              this.$axios({
                method: 'post',
                url: '/api/logon',
                data: params
              })
                .then(
                  function (res) {
                    console.log("注册成功：", res);
                    this.$Message.success('注册成功!去登录');
                    console.log(that.$refs.formSign.model);
                    this.modalSign = false;
                    this.modalLogin = true;
                  }
                )
                .catch();
            } else {
              this.$Message.error('两次输入的密码不一致');
            }
          } else {
            this.$Message.error('用户信息填写错误');
          }
        })
      },
      handleBack: function (name) {
        var that = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (that.$refs.formBack.model.password === that.$refs.formBack.model.rpassword) {
              this.$Message.success('找回成功!去登录');
              console.log(that.$refs.formBack.model);
              this.modalBack = false;
              this.modalLogin = true;
            } else {
              this.$Message.error('两次输入的密码不一致');
            }
          } else {
            this.$Message.error('用户信息填写错误');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      toLogin() {
        this.modalSign = false;
        this.modalBack = false;
        this.modalLogin = true;
      },
      toSign() {
        this.modalLogin = false;
        this.modalBack = false;
        this.modalSign = true;
      },
      toBack() {
        this.modalLogin = false;
        this.modalSign = false;
        this.modalBack = true;
      }

    },
    watch:{

    },
    beforeCreate(){
      var that = this;
      var cookie = document.cookie.split(";");
      cookie.map(function (item) {
        if (/usn/g.test(item)) {
          // console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjj');
          var username = item.split("=")[1];
          that.userName = username;
        }
      });
    },
    created() {
      var that = this;
      var cookie = document.cookie.split(";");
      cookie.map(function (item) {
        if (/usn/g.test(item)) {
          // console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjj');
          var username = item.split("=")[1];
          that.userName = username;
        }
      });

    }
  }
</script>

<style lang="less" scoped>
  @content: #657180;
  @text: #464c5b;
  @disable: #464c5b;
  @sub: #9ea7b4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @shadow: #e3e8ee;
  @orange: #ffd362;
  @heightNav: 38px;
  @height: 168px;
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
            min-width: 100px;
            float: left;
            a {
              text-decoration: none;
              font-size: 16px;
              color: @content;
              min-width: 100px;
              text-align: center;
              padding: 0 10px;
              &:hover {
                color: red;
              }
            }
          }
        }
      }
      .header-logo {
        .logo-wrap {
          width: 500px;
          height: 120px;
          float: left;
          img {
            width: 100px;
            height: 100px;
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
                color: @primary;
              }
            }
            span {
              font-size: 10px;
              color: @light;
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
