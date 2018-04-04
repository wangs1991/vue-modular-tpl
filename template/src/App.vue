<template>
  <div id="{{name}}">
    <loading/>
    <!--<keep-alive>-->
      <router-view/>
    <!--</keep-alive>-->
  </div>
</template>

<script>{{#if_eq category "web-pc"}}{{else}}
  import {Adapt} from './assets/js/Utils.js';
  {{/if_eq}}
    import Loading from '@/components/loading';

  export default {
    name: '{{name}}',
    components: {
        Loading
    },
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
  @import "assets/style/base.scss";
  {{#if_eq category "web-pc"}}html,
    body{
      width: 100%;
      height: 100%;
    }
  {{else}} html,
    body{
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
  {{/if_eq}}
  #{{name}}{
    width: 100%;
    height: 100%;
  }
</style>
