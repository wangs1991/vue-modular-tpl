<template>
  <div>
    <comp-header></comp-header>
    <router-view></router-view>
    <comp-footer></comp-footer>
  </div>
</template>

<script type="text/javascript">
  //  公用组件导入
  import compHeader from '@/components/header';
  import compFooter from '@/components/footer';
  export default {
    data () {
      return {
        hello: 'content of parent view !'
      };
    },
    computed: {},
    components: {
      compHeader,
      compFooter
    },
    watch: {},
    mounted () {

    }
  };
</script>

<style lang="scss">
  .panel-home{
    font-size: 14px;
  }
</style>
