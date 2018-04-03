<template>
  <div class="aside-ctner">
    <ul class="aside-group-panel">
      <li>
        <router-link v-bind:to="{path: '/'}">
          欢迎
        </router-link>
      </li>
      <li>
        <router-link v-bind:to="{path: '/doc'}">
          文档
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'asideBar',
    data() {
      return {
      };
    },
    computed: {}
  };
</script>

<style lang="scss">
  .aside-ctner{
    .aside-group-panel{
      margin: 0;
      padding-top: 15px;
      overflow: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 5;
      li{
        height: 32px;
        overflow: hidden;
        margin-bottom: 5px;
        padding-left: 20px;
        a{
          display: block;
          &.router-link-exact-active{
            color: #5fb2ff;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
