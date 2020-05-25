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
        v-if="cell.item"
        :tank="cell.item"
        :players="players"
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
    width: 4.5vh;
    height: 4.5vh;
    border: 1px solid rgba(220, 220, 220, 0.8);
  }
</style>
