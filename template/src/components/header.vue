{{#if_eq category "web-pc"}}
<template>
  <div id="header">
    <div class="ax_default">
      <span>web项目常用布局</span>
    </div>
    <div class="span5 text-right">
      <div class="user-bar">
        <span>用户信息</span>
        <span class="user-name">用户名</span>
      </div>
      <div class="quickAccess-bar">
        <!--<div class="button" type="drivers">驱动下载</div>-->
        <div class="button">修改密码</div>
        <div class="button">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'comp-header',
    data () {
      return { };
    },
    computed: {

    },
    mounted() {

      /*this.$store.commit('footerCtrl', {
        active: type,
        show: true
      });*/
    }
  };
</script>

<style lang="scss" scoped>
  #header {
    $header_lh: 75px;
    $header_pt: 10px;
    $header_fs: 50px;
    line-height: $header_lh;
    padding-top: $header_pt;
    font-size: $header_fs;
    color: #fff;
    text-align: center;
    font-weight: bold;
    -webkit-background-size: cover;
    background-size: cover;
    font-family: '微软雅黑', '微软雅黑 Regular';
    .ax_default {
      font-weight: 600;
      text-rendering: optimizeLegibility;
      font-style: normal;
      font-size: 32px;
      color: #FFFFFF;
      text-align: left;
      border-width: 0px;
      margin-left: 40px;
    }
    .span5 {
      width: 40.42553191489362%;
      height: 100%;
      position: absolute;
      right: 0;
      top: -6px;
    }
    .user-bar {
      font-size: 22px;
      color: #fff;
      margin-bottom: 12px;
      text-align: right;
      font-weight: 500;
      margin-right: 40px;
      .user-name {
        margin-left: 40px;
      }
    }
    .quickAccess-bar {
      position: absolute;
      top: 20px;
      right: 10px;
    }

    .quickAccess-bar,
    .user-bar {
      margin-right: 20px;
    }

    .button,
    .button:active,
    .button:focus {
      background-color: rgba(2, 154, 202, .3);
      border: 0;
      outline: 0;
      font-size: 16px;
      padding: 5px 12px;
      margin-left: 5px;
      border-radius: 20px;
      line-height: 1em;
      color: #fff;
      display: inline-block;
      cursor: pointer;
      font-weight: normal;
    }
  }
</style>
{{else}}
<template>
  <div class="panel-header" :class="{'noBg': !showBackground}" v-show="showBar">
    <div class="panel-header-l">
      <i class="icon i-back" v-show="showBack" @click="goBack"></i>
    </div>
    <div class="panel-header-c"> {{ title }} </div>
    <div class="panel-header-r">
      <i class="icon i-delete" v-show="showDelete"></i>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'headerDft',
    data () {
      return {
      };
    },
    computed: {
      title () {
        return this.$store.state.titleBar;
      },
      showBack () {
        return this.$store.state.titleBarBack;
      },
      showDelete () {
        return this.$store.state.titleBarDelete;
      },
      showBar () {
        return this.$store.state.titleShow;
      },
      showBackground () {
        return this.$store.state.titleBackground;
      },
      msgState () {
        return this.$store.state.Notify.state;
      }
    },
    methods: {
      goBack () {
        window.history.go(-1);
      }
    }
  };
</script>

<style lang="scss">
  // 默认头部配置
  $header_h: .80rem;
  $header_fs: .35rem;
  $header_i: 40px;

  .panel-header{
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    height: $header_h;
    line-height: $header_h;
    padding: 0 15px;
    background: url('../assets/images/titleBar.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    font-size: $header_fs;
    display: flex;
    &.noBg{
      background: transparent!important;
    }

    .panel-header-l,
    .panel-header-c,
    .panel-header-r{
      min-width: $header_i;
    }
    .panel-header-l .icon{
      width: 1em;
      left: 10px;
      top: 10px;
      background-size: 10px!important;
    }
    .panel-header-r .icon{
      width: 1em;
      right: 15px;
      top: 10px;
      background-size: 16px!important;
    }

    .panel-header-c{
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: inherit;
    }
  }
</style>
{{/if_eq}}

