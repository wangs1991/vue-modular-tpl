<template>
  <transition name="fade">
    <div v-show="loading">
      <div class="cover">
        <div class="loading">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    name: 'loading',
    data() {
      return {};
    },
    computed: {
      loading () {
        return this.$store.state.isLoading;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/style/base';

  @keyframes scale {
    0% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }

  .cover {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    z-index: 100000;
    .loading {
      width: 40px;
      height: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, .1);
      border-radius: 10px;
      display: flex;
      .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        &.circle1 {
          background-color: #0086c9;
          box-shadow: 0 0 2px #0086c9;
          transform-origin: 100% 50%;
          -webkit-animation: scale .5s 0s linear alternate infinite;
          animation: scale .5s 0s linear alternate infinite;
        }
        &.circle2 {
          background-color: #64d214;
          box-shadow: 0 0 2px #64d214;
          transform-origin: 0 50%;
          -webkit-animation: scale .5s .5s linear alternate infinite;
          animation: scale .5s .5s linear alternate infinite;
        }
      }
    }
  }
</style>
