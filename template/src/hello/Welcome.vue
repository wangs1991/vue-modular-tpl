<template>
  <div>
    <h2 class="slogan">vue项目生成模板文件</h2>
    <p class="copyright">@author: wangs@bjewaytek.com</p>
    <ul class="about-group">
      <li class="i-company">
        北京一维大成科技有限公司
      </li>
      <li class="i-website">
        www.bjewaytek.com
      </li>
      <li class="i-phone">
        010-62680078
      </li>
      <li class="i-fuwu">
        400-900-1823
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

  export default {
    data() {
      return {

      };
    },
    computed: {},
    methods: {
    },
    created() {
  {{#if_eq category "web-pc"}} {{else}}
      this.$store.commit('titleBarCtrl', {
        title: '欢迎页',
        back: true,
        show: true,
        hideBg: false
      });
  {{/if_eq}}
    }
  };
</script>

<style lang="scss" scoped>
  .slogan{
    font-weight: 600;
    font-style: normal;
    font-size: 42px;
    text-align: center;
    width: 14em;
    border-bottom: 3px solid #6fb9d9;
    margin: 60px auto 0;
    padding-bottom: 6px;
    background: linear-gradient(to right, #5d90f7, #5bc4ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  .copyright{
    text-align: center;
    margin-top: 5px;
    color: #8e8e8e;
  }
  {{#if_eq category "web-pc"}}
  .about-group{
    width: 300px;
    margin: 0 auto;
    margin-top: 50px;
    li{
      line-height: 1.5em;
      color: #202020;
      font-size: 18px;
      padding: 10px 0;
      &:last-child{
        border: none;
      }
      &:before{
        content: ' ';
        float: left;
        margin-right: .5em;
        width: 30px;
        height: 30px;
        background-size: 20px auto;
        background-repeat: no-repeat;
        background-position: center center;
      }
      &.i-company:before{
        background-image: url('../assets/images/company.png');
      }
      &.i-website:before{
        background-image: url('../assets/images/website.png');
      }
      &.i-phone:before{
        background-image: url('../assets/images/phone.png');
      }
      &.i-company:before{
        background-image: url('../assets/images/company.png');
      }
      &.i-fuwu:before{
        background-image: url('../assets/images/kefu.png');
        background-size: 20px auto;
      }
    }
  }
  {{else}}
  .about-group{
    margin-top: 50px;
    li{
      line-height: 1.5em;
      color: #202020;
      font-size: .26rem;
      padding: .25rem .20rem;
      border-bottom: 1px solid #989898;
      &:last-child{
        border: none;
      }
      &:before{
        content: ' ';
        float: left;
        margin-right: .5em;
        font-size: inherit;
        width: .30rem;
        height: 1em;
        background-size: .30rem auto;
        background-repeat: no-repeat;
        background-position: center center;
      }
      &.i-company:before{
        background-image: url('../assets/images/company.png');
      }
      &.i-website:before{
        background-image: url('../assets/images/website.png');
      }
      &.i-phone:before{
        background-image: url('../assets/images/phone.png');
      }
      &.i-company:before{
        background-image: url('../assets/images/company.png');
      }
      &.i-fuwu:before{
        background-image: url('../assets/images/kefu.png');
      }
    }
  }
  {{/if_eq}}

</style>
