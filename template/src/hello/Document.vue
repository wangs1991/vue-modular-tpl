<template>
  <div id="panel_content" class="content-warpper">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, animi, debitis eum fuga fugit illum impedit in iste, laudantium nihil obcaecati odit optio placeat sed veritatis vitae voluptatem. Id, ut!
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
  {{#if_eq category "web-pc"}}
  $wrapper: 20px;  {{else}}
  /*针对移动端写的头部*/
  $wrapper: .20rem;
  {{/if_eq}}
  .panel-home{
    font-size: 14px;
  }
  .content-warpper{
    line-height: 2em;
    padding: $wrapper;
  }
</style>
