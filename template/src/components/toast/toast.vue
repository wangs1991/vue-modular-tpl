<template>
  <transition name='fade'>
    <div v-show='visible' :class='position' class='toast' @click="callback">
      <i>{{message}}</i>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        message: '',
        position: ''
      };
    },
    methods: {
      callback () {
        this.visible = false;
        this.callback();
      }
    }
  };
</script>

<style lang="scss">
  .toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    word-wrap: break-word;
    padding: 10px;
    min-width: 200px;
    text-align: center;
    z-index: 9999;
    font-size: 14px;
    width: 90%;
    max-width: 70rem;
    color: #fff;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;

    i{
      font-style: normal;
    }

    &.fade-enter-active,
    &.fade-leave-active {
      transition: transform .3s
    }

    &.middle {
      top: 50%;

      &.fade-enter,
      &.fade-leave-active {
        transform: translate(-50%, -50%) scale(0);
      }
    }

    &.top {
      top: 80px;

      &.fade-enter,
      &.fade-leave-active {
        transform: translate(-50%, -300px) scale(0);
      }
    }

    &.bottom {
      top: 90%;

      &.fade-enter,
      &.fade-leave-active {
        transform: translate(-50%, 300px) scale(0);
      }
    }
  }
</style>
