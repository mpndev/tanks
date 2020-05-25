<template>
  <div class="rows">
    <div class="row" v-for="(cells, rowIndex) in rows" :key="rowIndex">
      <cells
        :cells="cells"
        :players="players"
        :rowIndex="rowIndex"
        :rows="rows"
        @cell-was-clicked="data => $emit('cell-was-clicked', data)"
      />
    </div>
  </div>
</template>

<script>
import Cells from './Cells'
export default {
  name: 'Rows',
  props: [
    'rows',
    'players'
  ],
  components: {
    Cells
  }
}
</script>

<style>
  .rows {
    display: flex;
  }
  .rows > .row{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
