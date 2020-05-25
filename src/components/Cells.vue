<template>
  <div class="cells">
    <div
      class="cell"
      v-for="(cell, cellIndex) in cells"
      :style="{backgroundColor: cell.backgroundColor, border: cell.baseType === 'respondSpot' && '5px solid pink'}"
      :key="cellIndex"
      @click="$emit('cell-was-clicked', [rowIndex, cellIndex])"
    >
      <tank
        v-if="cell.item && cell.item.baseType === 'tank'"
        :tank="cell.item"
        :players="players"
      />
      <div
        class="shop-item-on-board"
        v-if="cell.item && (cell.item.baseType === 'money' || cell.item.baseType === 'ammo' || cell.item.baseType === 'fuel')"
        v-html="cell.item.label"
      />
    </div>
  </div>
</template>

<script>
import Tank from './Tank'
export default {
  name: 'Calls',
  props: [
    'rows',
    'cells',
    'players',
    'rowIndex'
  ],
  components: {
    Tank
  }
}
</script>

<style>
  .cells > .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5vmin;
    height: 4.5vmin;
    border: 1px solid rgba(220, 220, 220, 0.8);
  }
  .shop-item-on-board {
    font-size: 1.6vmin;
  }
</style>
