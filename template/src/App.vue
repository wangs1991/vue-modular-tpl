<template>
  <div id="{{name}}">
    <router-view/>
  </div>
</template>

<script>{{#if_eq category "web-pc"}}{{else}}
  import *, {Adapt} from './assets/js/Utils.js';
  {{/if_eq}}

  export default {
    name: '{{name}}',
    components: { },
    mounted() { {{#if_eq category "web-pc"}}{{else}}
      // eslint-disable-next-line
        Adapt.init({
          standard: {{transform}}     // 实际是750，为满足设备快速适配调整成780进行缩放
        });
      {{/if_eq}}
    }
  };
</script>

<style lang="scss">
  @import "assets/style/reset.scss";
  @import "assets/style/base.scss";  {{#if_eq category "web-pc"}}

  {{else}}
  /*针对移动端写的头部*/
  $header_h: .93rem;
  $footer_h: .85rem;
  {{/if_eq}}
  html,
  body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  #header{
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    height: $header_h;
    background: linear-gradient(140deg, #5e8ef7, #5bc4ff, #5e8ef7); /* 标准的语法 */
  }
  #panel_content{
    position: absolute;
    top: $header_h;
    bottom: $footer_h;
    width: 100%;
    z-index: 1;
    overflow: auto;
  }
  #footer{
    position: absolute;
    z-index: 10000;
    bottom: 0;
    left: 0;
    right: 0;
    height: $footer_h;
    line-height: $footer_h;
  }
</style>
