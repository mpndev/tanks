<template>
  <div
    :style="{border: tank.isHoveredOnInfo ? '5px solid #fa800d' : 'none', position: 'relative'}"
    v-show="!tank.isDead"
    @mouseenter="tank.isHoveredOnBoard = true"
    @mouseleave="tank.isHoveredOnBoard = false"
    :title="`🏆${tank.level} 🖤${tank.health}`"
  >
    <div
      class="tank-notification"
      v-if="tank.message.length"
    >
      {{ tank.message }}
    </div>
    <asvg v-if="tank.type === 'A'" :tank="tank" :players="players" />
    <bsvg v-if="tank.type === 'B'" :tank="tank" :players="players" />
    <csvg v-if="tank.type === 'C'" :tank="tank" :players="players" />
    <dsvg v-if="tank.type === 'D'" :tank="tank" :players="players" />
    <esvg v-if="tank.type === 'E'" :tank="tank" :players="players" />
    <fsvg v-if="tank.type === 'F'" :tank="tank" :players="players" />
  </div>
</template>

<script>
import Asvg from './svg-templates/A'
import Bsvg from './svg-templates/B'
import Csvg from './svg-templates/C'
import Dsvg from './svg-templates/D'
import Esvg from './svg-templates/E'
import Fsvg from './svg-templates/F'
export default {
  name: 'Tank',
  components: {
    Asvg,
    Bsvg,
    Csvg,
    Dsvg,
    Esvg,
    Fsvg
  },
  props: [
    'tank',
    'players'
  ]
}
</script>

<style>
  .tank-notification {
    position: absolute;
    top: -2vmin;
    left: 50%;
    transform: translateX(-50%);
    width: 10vmin;
    color: purple;
    font-size: 2.4vmin;
    text-align: center;
    animation: up 2s linear;
  }

  @keyframes up {
    0% {
      top: -2vmin
    }
    100% {
      top: -5vmin
    }
  }
</style>
