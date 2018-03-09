<template>
  <div id="header">
    {{name}}
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
  {{#if_eq category "web-pc"}}
  $header_lh: .73rem;
  $header_pt: .20rem;
  $header_fs: .34rem;
  {{else}}
  /*针对移动端写的头部*/
  $header_lh: .73rem;
  $header_pt: .20rem;
  $header_fs: .34rem;
  {{/if_eq}}
  #header{
    line-height: $header_lh;
    padding-top: $header_pt;
    font-size: $header_fs;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
</style>
