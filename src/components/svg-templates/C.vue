<template>
  <svg
    class="item"
    :style="{ fill: fillColor }"
    viewBox="12.286 224.14 469.895 387.967"
  >
    <rect x="71.582" y="505.642" width="334.306" height="34.44" style=""></rect>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(2.333057, 0, 0, 2.160631, -51.894978, -325.229584)"></circle>
    <rect x="204.906" y="382.84" width="234.743" height="9.19" style=""></rect>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(1.887091, 0, 0, 1.759519, 250.089951, -159.187988)"></circle>
    <rect x="312.131" y="359.255" width="19.693" height="146.834" style=""></rect>
    <rect x="159.348" y="275.168" width="121.037" height="234.288" style=""></rect>
    <rect x="202.587" y="364.736" width="211.675" height="8.193" style=""></rect>
    <rect x="206.125" y="404.164" width="256.757" height="9.008" style=""></rect>
  </svg>
</template>

<script>
export default {
  props: {
    tank: {
      default: false
    },
    players: {
      default: false
    }
  },
  computed: {
    fillColor () {
      if (this.players && this.tank) {
        return this.players[this.tank.playerId - 1].color
      }
      return '#000'
    }
  }
}
</script>

<style>
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5vh;
    height: 3.5vh;
    border-radius: 50%;
    cursor: default;
    font-size: 1.3vh;
  }
</style>
