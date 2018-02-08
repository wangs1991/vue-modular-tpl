<template>
  <div id="panel_content">
    <img class="logo" src="../assets/images/logo.png" alt="" />
    <p class="slogan">欢迎使用vue模块化解决方案！</p>
    <p class="author">wangs@bjewaytek.com</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        hello: 'content of parent view !'
      };
    },
    computed: {},
    components: {},
    watch: {},
    mounted () {

    }
  };
</script>

<style lang="scss">
  .logo{
    display: block;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }
  .slogan{
    font-size: .30rem;
    color: #000000;
    text-align: center;
    margin-top: .30rem;
  }
  .author{
    color: #555;
    font-size: .25rem;
    text-align: center;
    margin-top: 2rem;
  }
</style>
