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
  $font-size: 20px;{{else}}
  $font-size: .24rem;
  {{/if_eq}}
  .panel-home{
    font-size: $font-size;
  }
  .content-warpper{
    line-height: 2em;
    padding: 20px;
  }
</style>
