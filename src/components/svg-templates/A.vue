<template>
  <svg
    class="item"
    :style="{ fill: fillColor }"
    viewBox="13.23 129.336 486.77 367.651"
  >
    <path d="M 526.906 641.629 m -76.709 0 a 76.709 76.709 0 1 0 153.418 0 a 76.709 76.709 0 1 0 -153.418 0 Z M 526.906 641.629 m -46.026 0 a 46.026 46.026 0 0 1 92.052 0 a 46.026 46.026 0 0 1 -92.052 0 Z" style="" transform="matrix(-0.645269, 0.763955, -0.763955, -0.645269, 940.182665, 399.445407)"></path>
    <path d="M 526.906 641.629 m -76.709 0 a 76.709 76.709 0 1 0 153.418 0 a 76.709 76.709 0 1 0 -153.418 0 Z M 526.906 641.629 m -46.026 0 a 46.026 46.026 0 0 1 92.052 0 a 46.026 46.026 0 0 1 -92.052 0 Z" style="" transform="matrix(0.763955, 0.645269, -0.645269, 0.763955, 399.223483, -442.662096)"></path>
    <path d="M 526.906 641.629 m -76.709 0 a 76.709 76.709 0 1 0 153.418 0 a 76.709 76.709 0 1 0 -153.418 0 Z M 526.906 641.629 m -46.026 0 a 46.026 46.026 0 0 1 92.052 0 a 46.026 46.026 0 0 1 -92.052 0 Z" style="" transform="matrix(-0.645269, 0.763955, -0.763955, -0.645269, 1074.031115, 400.043125)"></path>
    <rect x="162.068" y="209.362" width="230.242" height="100.233" style=""></rect>
    <path d="M 492.403 26.199 L 554.442 133.654 L 430.363 133.654 L 492.403 26.199 Z" style="" transform="matrix(-0.488773, 0.872411, -0.872411, -0.488773, 488.73111, -106.115845)"></path>
    <circle style="" cx="226.366" cy="222.719" r="69.515"></circle>
    <rect x="246.212" y="179.553" width="224.947" height="11.855" style=""></rect>
    <rect x="117.158" y="306.914" width="272.761" height="20.729" style=""></rect>
    <rect x="290.238" y="313.148" width="53.761" height="49.432" style=""></rect>
    <rect x="149.483" y="311.898" width="52.283" height="40.628" style=""></rect>
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
