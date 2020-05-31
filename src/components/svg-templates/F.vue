<template>
  <svg
    class="item"
    :style="{ fill: fillColor }"
    viewBox="215.786 156.171 284.133 219.805"
  >
    <rect x="248.435" y="267.256" width="217.997" height="23.133" style=""></rect>
    <rect x="388.3" y="245.369" width="73.965" height="22.877" style=""></rect>
    <rect x="388.801" y="221.634" width="4.856" height="25.235" style=""></rect>
    <circle style="" cx="287.679" cy="293.034" r="22.061"></circle>
    <circle style="" cx="439.917" cy="292.725" r="22.061"></circle>
    <rect x="248.427" y="234.8" width="103.375" height="32.54" style=""></rect>
    <rect x="322.347" y="84.162" width="2.16" height="34.169" style="" transform="matrix(1, 0, 0.835778, 1, -139.149017, 118.637184)"></rect>
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
