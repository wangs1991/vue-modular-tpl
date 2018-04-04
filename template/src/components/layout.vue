<template> {{#if_eq category "web-pc"}}
  <div class="main-ctner">
    <header class="header">
      <comp-header />
    </header>
    <div id="main-panel">
      <aside class="aside">
        <aside-bar/>
      </aside>
      <section class="main-view" id="mainView">
        <transition name="fade">
          <router-view class="center-viewer"/>
        </transition>
      </section>
    </div>
  </div>{{else}}
  <div class="panel-home">
    <comp-header />
    <transition name="fade">
      <router-view class="panel-main"></router-view>
    </transition>
    <comp-footer/>
  </div>
  {{/if_eq}}
</template>

 <script type="text/javascript">
   import CompHeader from '@/components/header';
  {{#if_eq category "web-pc"}}
  import AsideBar from '@/components/aside';
  {{else}}
   import CompFooter from '@/components/footer';
  {{/if_eq}}
  export default {
    name: 'layout',
    data() {
      return {};
    },
    components: {
      CompHeader,
      {{#if_eq category "web-pc"}}
      AsideBar, {{else}}
      CompFooter {{/if_eq}}
    }
  };
</script>

<style lang="scss">
  {{#if_eq category "web-pc"}}
  $header_h: 85px;
  $aside_w: 245px;
  $ctner_min_width: 1000px;

  .header {
    height: $header_h;
    background-color: #5fb2ff;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    transition: none;
  }

  #main-panel {
    position: absolute;
    top: $header_h;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    background-color: #fff;
    transition: none;
    .aside {
      position: absolute;
      z-index: 50;
      top: 0;
      bottom: 0;
      left: 0;
      width: $aside_w;
      background-color: #ffffff;
      transition: none;
    }
    .main-view{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 245px;
      padding: 15px;
      background-color: #fff;
      border-left: 3px solid #6fb9d9;
      overflow: auto;
      transition: none;
    }
    #tabs-panel{
      background-color: #c0d6ed;
      border-left: 3px solid #6fb9d9;
      position: absolute;
      left: $aside_w;
      top: 0;
      right: 0;
      z-index: 10;
      height: 45px;
      padding: 6px;
      padding-bottom: 0;
      transition: none;
    }
  }
  {{else}}
  $header_h: .80rem;
  $footer-h: .80rem;
  .panel-main {
    position: absolute;
    z-index: 1;
    top: $header_h;
    bottom: $footer-h;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    background-color: #fff;
  }
  {{/if_eq}}
</style>
