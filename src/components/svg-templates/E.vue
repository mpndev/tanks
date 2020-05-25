<template>
  <svg
    class="item"
    :style="{ fill: fillColor }"
    viewBox="12.286 224.14 469.895 387.967"
  >
    <rect x="118.727" y="569.735" width="258.531" height="42.04"></rect>
    <rect x="165.364" y="357.4" width="170.485" height="214.425" style=""></rect>
    <path style="" transform="matrix(0.611898, 0, 0, 0.560538, -133.559052, 267.426086)" d="M 763.797 159.457 A 137.852 137.852 0 1 1 625.945 21.449 L 625.945 159.301 Z"></path>
    <rect x="292.914" y="272.633" width="105.863" height="12.266" style="" transform="matrix(0.899954, -0.435985, 0.435985, 0.899954, -143.737793, 232.230026)"></rect>
    <rect x="385.797" y="322.587" width="42.778" height="24.241" style="" transform="matrix(0.522584, 0.852588, -0.852588, 0.522584, 408.317566, -215.056686)" rx="12.12" ry="12.12"></rect>
    <rect x="542.882" y="530.923" width="91.606" height="5.537" style="" transform="matrix(0.923518, -0.383555, 0, 1.082816, -159.681992, -66.095734)"></rect>
    <rect x="307.296" y="409.206" width="51.853" height="4.267" style="" transform="matrix(0.925953, -0.37764, 0, 1.079969, 53.733307, -31.8134)"></rect>
    <rect x="459.553" y="382.463" width="86.871" height="4.937" style="" transform="matrix(0.924435, -0.38134, 0.38134, 0.924435, -237.880402, 136.887146)"></rect>
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
    width: 4vmin;
    height: 4vmin;
    border-radius: 50%;
    cursor: default;
    font-size: 1.3vmin;
  }
</style>
