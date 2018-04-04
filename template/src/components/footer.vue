<template>
  <div id="footer">
    <router-link v-bind:to="{path: '/'}">
      欢迎
    </router-link>
    <router-link v-bind:to="{path: '/doc'}">
      文档
    </router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'comp-footer',
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

<style lang="scss">
  $footer-h: .80rem;
  $footer-fs: .25rem;
  #footer{
    border-top: 1px solid #c4c4c4;
    font-size: $footer_fs;
    color: #a6a6a6;
    background-color: #ffffff;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: $footer-h;
    line-height: $footer-h;

    a{
      color: inherit;
      font-size: inherit;
      width: 50%;
      text-align: center;
      &.router-link-exact-active{
        color: #5fb2ff;
        font-weight: bold;
      }
    }
  }
</style>
