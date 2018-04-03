<template>
  <layout/>
</template>

<script type="text/javascript">
  //  公用组件导入
  import layout from '@/components/layout';
  export default {
    data () {
      return {
        hello: 'content of parent view !'
      };
    },
    computed: {},
    components: {
      layout
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
