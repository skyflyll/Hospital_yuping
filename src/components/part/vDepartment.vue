<template>
  <div class="department">
    <div class="department-head">
      <h2>科室介绍</h2>
      <span><a href="javascript:;">所有科室 >></a></span>
    </div>
    <div class="department-content">
      <div class="department-wrap clearfix" v-for="item in departments">
        <a :href="item.href" class="clearfix"><h1>{{item.name}}</h1></a>
        <div class="content-wrap">
          <span v-for="i in item.importDetails">
          <a :href="i.url"><Icon type="plus-round"></Icon> {{i.name}}</a>
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
            name: '重点学科',
            href: 'javascript:;',
            importDetails: [
              {
                url: 'javascript:;',
                name: '心内科'
              },
              {
                url: 'javascript:;',
                name: '心外科'
              },
              {
                url: 'javascript:;',
                name: '呼吸与危重症医学科'
              },
              {
                url: 'javascript:;',
                name: '麻醉科'
              },
              {
                url: 'javascript:;',
                name: '普外科'
              },
              {
                url: 'javascript:;',
                name: '肾内科'
              },
              {
                url: 'javascript:;',
                name: '肝胆外科'
              },
              {
                url: 'javascript:;',
                name: '儿童科'
              },
              {
                url: 'javascript:;',
                name: '妇科'
              },
              {
                url: 'javascript:;',
                name: '泌尿外科'
              },
              {
                url: 'javascript:;',
                name: '神经外科'
              },
              {
                url: 'javascript:;',
                name: '急诊科'
              },
              {
                url: 'javascript:;',
                name: '骨科'
              }
            ]
          },
          {
            name: '临床科室',
            importDetails: [
              {
                url: 'javascript:;',
                name: '生殖中心'
              },
              {
                url: 'javascript:;',
                name: '消化内科'
              },
              {
                url: 'javascript:;',
                name: '内分泌科'
              },
              {
                url: 'javascript:;',
                name: '血液内科'
              },
              {
                url: 'javascript:;',
                name: '感染科'
              },
              {
                url: 'javascript:;',
                name: '神经内科'
              },
              {
                url: 'javascript:;',
                name: '干医科'
              },
              {
                url: 'javascript:;',
                name: '肿瘤科'
              },
              {
                url: 'javascript:;',
                name: '心功能科'
              },
              {
                url: 'javascript:;',
                name: '皮肤科'
              },
              {
                url: 'javascript:;',
                name: '康复医学科'
              },
              {
                url: 'javascript:;',
                name: '中医科'
              },
              {
                url: 'javascript:;',
                name: '听力中心（耳鸣眩晕门诊）'
              },
              {
                url: 'javascript:;',
                name: '眼科'
              },
              {
                url: 'javascript:;',
                name: '耳鼻喉科'
              },
              {
                url: 'javascript:;',
                name: '口腔科'
              },
              {
                url: 'javascript:;',
                name: '胸外科'
              },
              {
                url: 'javascript:;',
                name: '烧伤整形外科'
              },
              {
                url: 'javascript:;',
                name: '重症监护科'
              },
              {
                url: 'javascript:;',
                name: '产科'
              },
              {
                url: 'javascript:;',
                name: '小儿外科'
              },
              {
                url: 'javascript:;',
                name: '心理科'
              },
              {
                url: 'javascript:;',
                name: '乳腺外科'
              },
              {
                url: 'javascript:;',
                name: '门诊部'
              },
              {
                url: 'javascript:;',
                name: '体检中心'
              },
              {
                url: 'javascript:;',
                name: '南明堂诊所'
              },
              {
                url: 'javascript:;',
                name: '疼痛科'
              },
              {
                url: 'javascript:;',
                name: '眼视光科'
              }
            ]
          },
          {
            name: '科技科室',
            importDetails: [
              {
                url: 'javascript:;',
                name: '超声科'
              },
              {
                url: 'javascript:;',
                name: '内镜科'
              },
              {
                url: 'javascript:;',
                name: '高压氧科'
              },
              {
                url: 'javascript:;',
                name: '医学影像科'
              },
              {
                url: 'javascript:;',
                name: '输血科'
              },
              {
                url: 'javascript:;',
                name: '核医学科'
              },
              {
                url: 'javascript:;',
                name: '病理科'
              },
              {
                url: 'javascript:;',
                name: '神经电生理科'
              },
              {
                url: 'javascript:;',
                name: '检验科'
              },
              {
                url: 'javascript:;',
                name: '药剂科'
              },
              {
                url: 'javascript:;',
                name: '中心实验室'
              },
              {
                url: 'javascript:;',
                name: '放射科'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @shadow:#d7dde4;
  @bgc: #f8f8f9;
  @primary: #2d8cf0;
  @light: #5cadff;
  @dark: #2b85e4;
  @content:#657180;
  @sbg: #ffefeb;
  @dark: #2b85e4;
  @border:#dddee1;
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .department {
    width: 1000px;
    margin: 18px auto;
    min-height: 390px;
    .department-head {
      width: 100%;
      height: 38px;
      border-bottom: 1px solid @light;
      line-height: 38px;
      background-image: url("../../assets/headBg.jpg");
      box-shadow: 5px -5px 30px @shadow inset;
      h2{
        padding: 0 30px 0 10px;
        float: left;
        font-size: 20px;
        height: 38px;
        box-sizing: content-box;
        color: @bgc;
        background: @primary;
        position: relative;
        box-shadow: 0 -5px 8px @light inset;
        &::after{
          position: absolute;
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          left: 120px;
          border-left: 38px solid @light;
          border-top: 38px solid transparent;
          box-shadow: 0 -5px 8px @light inset;

        }
      }
      span {
        display: block;
        float: right;
        padding-right: 20px;
        a {
          color: @content;
          &:hover{
            color: red;
          }
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
        min-height: 60px;
        border: 1px dashed @light;
        margin-top: 5px;
        border-radius: 5px;
        background: #fff;
        &>a{
          display: block;
          width: 120px;
          height: 100%;
          float: left;
          margin-top: 20px;
          h1 {
            width: 100%;
            display: block;
            float: left;
            text-align: center;
            font-size: 20px;
            vertical-align: middle;
            color: red;
            &:hover{
              color: @primary;
            }
          }
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
            color: @content;
            i{
              color: red;
            }
            &:hover {
              background: @light;
              color: @bgc;
              i{
                color: red;
              }
            }
            &:active {
              background: @primary;
            }
          }
        }
      }

    }

  }
</style>
