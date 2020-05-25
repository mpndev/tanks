<template>
  <svg
    class="item"
    :style="{ fill: fillColor }"
    viewBox="12.286 224.14 469.895 387.967"
  >
    <rect x="193.148" y="297.801" width="170.485" height="104.717" style=""></rect>
    <circle style="" cx="92.542" cy="529.987" r="35.758"></circle>
    <circle style="" cx="165.593" cy="528.305" r="35.758"></circle>
    <circle style="" cx="238.752" cy="525.391" r="35.758"></circle>
    <circle style="" cx="92.542" cy="529.987" r="35.758" transform="matrix(2.42972, 0, 0, 2.250611, 129.997192, -710.548889)"></circle>
    <path d="M 553.554 172.72 L 711.051 334.576 L 396.056 334.576 L 553.554 172.72 Z" style="" transform="matrix(0.970649, -0.240502, 0.240502, 0.970649, -385.045776, 263.382874)"></path>
    <rect x="361.632" y="334.092" width="64.259" height="32.925" style=""></rect>
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
