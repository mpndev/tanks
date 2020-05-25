<template>
  <svg
    class="item"
    :style="{ fill: fillColor }"
    viewBox="9.967 224.14 472.214 214.993"
  >
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(0.932843, 0, 0, 0.851345, -2.653571, 55.952393)"></circle>
    <rect x="38.149" y="323.722" width="424.172" height="34.44" style=""></rect>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(0.932843, 0, 0, 0.851345, 369.290619, 56.112217)"></circle>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(0.932843, 0, 0, 0.851345, 294.618622, 55.95895)"></circle>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(0.932843, 0, 0, 0.851345, 219.05545, 55.549492)"></circle>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(0.932843, 0, 0, 0.851345, 144.092224, 56.983681)"></circle>
    <circle style="" cx="72.271" cy="381.928" r="30.534" transform="matrix(0.932843, 0, 0, 0.851345, 72.857903, 55.987411)"></circle>
    <path d="M 355.185 -10.655 L 565.915 63.003 L 144.454 63.003 L 355.185 -10.655 Z" style="" transform="matrix(0.999891, -0.014755, 1.116716, 0.98363, -176.679688, 269.762909)"></path>
    <path d="M 206.396 201.181 L 254.629 314.666 L 176.074 314.666 L 206.396 201.181 Z" style="" transform="matrix(0.540698, -0.841217, 0.841217, 0.540698, -252.551346, 322.608582)"></path>
    <rect x="181.046" y="275.355" width="256.757" height="9.008" style=""></rect>
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
