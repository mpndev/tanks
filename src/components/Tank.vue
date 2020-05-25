<template>
  <div
    :style="{border: tank.isHoveredOnInfo ? '5px solid #fa800d' : 'none'}"
    v-show="!tank.isDead"
    @mouseenter="tank.isHoveredOnBoard = true"
    @mouseleave="tank.isHoveredOnBoard = false"
    :title="`🏆${tank.level} 🖤${tank.health}`"
  >
    <asvg v-if="tank.type === 'A'" :tank="tank" :players="players" />
    <bsvg v-if="tank.type === 'B'" :tank="tank" :players="players" />
    <csvg v-if="tank.type === 'C'" :tank="tank" :players="players" />
    <dsvg v-if="tank.type === 'D'" :tank="tank" :players="players" />
    <esvg v-if="tank.type === 'E'" :tank="tank" :players="players" />
  </div>
</template>

<script>
import Asvg from './svg-templates/A'
import Bsvg from './svg-templates/B'
import Csvg from './svg-templates/C'
import Dsvg from './svg-templates/D'
import Esvg from './svg-templates/E'
export default {
  name: 'Tank',
  components: {
    Asvg,
    Bsvg,
    Csvg,
    Dsvg,
    Esvg
  },
  props: [
    'tank',
    'players'
  ]
}
</script>
