<template>
  <div id="panel_content" class="content-warpper">
    <div>
      <input type="text" @keydown="typing" v-model="hello"/>
    </div>
    <div @click="typing">按钮</div>
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
    methods: {
      typing: (function () {
        console.log(12, new Date());
        return debounce(function () {
          console.log(111);
        }, 1000, false);
      })(),
    },
    mounted () {
      window.addEventListener('mousemove', debounce(function () {
        console.log(new Date(), 'mousemove');
      }, 3000, true));
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
