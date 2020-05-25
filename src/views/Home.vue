<template>
  <div class="screen">
    <div class="player-panel" v-for="(player, playerIndex) in players" :key="playerIndex" v-show="players[currentPlayer].id === player.id">
      <div class="users-panel">
        <div
          class="user-panel"
          :style="{border: `1px solid ${innerPlayer.color}`, boxShadow: currentPlayer === innerPlayerIndex ? `0 0 0 5px ${innerPlayer.color}` : 'none'}"
          v-for="(innerPlayer, innerPlayerIndex) in players"
          :key="innerPlayerIndex"
        >
          {{ innerPlayer.name }} | {{ innerPlayer.money }}$ | exp: {{ innerPlayer.exp }}
        </div>
      </div>
      <div class="items-panel">
        <div
          class="items-items"
          v-for="(item, itemIndex) in players[currentPlayer].items"
          :key="itemIndex"
          @click="massAttack(itemIndex)"
        >
          <span
            class="items-item-icon"
            :class="{'items-item-icon-zero': item.quantity === 0}"
            v-html="item.icon"
          />
          X {{ item.quantity }}
        </div>
      </div>
      <div class="tanks-panel">
        <div
          class="tank-panel"
          v-for="(tank, tankIndex) in player.tanks"
          :key="tankIndex"
          :style="{backgroundColor: tank.isHoveredOnBoard ? '#fa800d' : 'inherit'}"
          v-show="!tank.isDead"
          @mouseenter="handleTankPanelTankMouseEnter(tank)"
          @mouseleave="handleTankPanelTankMouseLeave(tank)"
        >
          <p class="tank-panel-item">
            <asvg v-if="tank.type === 'A'" :tank="tank" :players="players" />
            <bsvg v-if="tank.type === 'B'" :tank="tank" :players="players" />
            <csvg v-if="tank.type === 'C'" :tank="tank" :players="players" />
            <dsvg v-if="tank.type === 'D'" :tank="tank" :players="players" />
            <esvg v-if="tank.type === 'E'" :tank="tank" :players="players" />
          </p>
          <p class="tank-panel-item">&#127942;{{ tank.level }}</p>
          <p class="tank-panel-item">&#127894;{{ tank.exp }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'speed')"><span :class="{'tank-panel-icon-not-zero': player.items.bonusPoints.quantity > 0}">&#8987;</span>{{ tank.speed }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'range')"><span :class="{'tank-panel-icon-not-zero': player.items.bonusPoints.quantity > 0}">&#127919;</span>{{ tank.range }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'damage')"><span :class="{'tank-panel-icon-not-zero': player.items.bonusPoints.quantity > 0}">&#128481;</span>{{ tank.damage }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'baseHealth')"><span :class="{'tank-panel-icon-not-zero': player.items.bonusPoints.quantity > 0}">&#128737;</span>{{ tank.baseHealth }}</p>
          <p class="tank-panel-item"><span>&#128095;</span>{{ tank.moves }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'fuel')"><span :class="{'tank-panel-item-icon-not-zero': player.items.fuel.quantity > 0}">&#128738;</span>{{ tank.fuel }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'ammo')"><span :class="{'tank-panel-item-icon-not-zero': player.items.ammo.quantity > 0}">&#128163;</span>{{ tank.ammo }}</p>
          <p class="tank-panel-item" @click="useItem(tank, 'health')"><span :class="{'tank-panel-item-icon-not-zero': player.items.health.quantity > 0}">&#128420;</span>{{ tank.health }}</p>
        </div>
      </div>
      <div class="shop-panel">
        <div class="shop-tanks">
          <div
            class="shop-tank"
            v-for="(shopTank, shopTanksIndex) in shopTanks"
            :key="shopTanksIndex"
            @click="buyTank(shopTanksIndex)"
          >
            <asvg :class="{'shop-tank-icon-zero': players[currentPlayer].money < shopTank.price}" v-if="shopTank.type === 'A'" />
            <bsvg :class="{'shop-tank-icon-zero': players[currentPlayer].money < shopTank.price}" v-if="shopTank.type === 'B'" />
            <csvg :class="{'shop-tank-icon-zero': players[currentPlayer].money < shopTank.price}" v-if="shopTank.type === 'C'" />
            <dsvg :class="{'shop-tank-icon-zero': players[currentPlayer].money < shopTank.price}" v-if="shopTank.type === 'D'" />
            <esvg :class="{'shop-tank-icon-zero': players[currentPlayer].money < shopTank.price}" v-if="shopTank.type === 'E'" />
            ${{ shopTank.price }}
          </div>
        </div>
      </div>
      <div class="shop-panel">
        <div
          class="shop-items"
        >
          <div
            class="shop-item"
            v-for="(item, itemIndex) in shopItems"
            :key="itemIndex"
            @click="buyItem(itemIndex)"
          >
            <span
              class="shop-item-icon"
              :class="{'shop-item-icon-zero': players[currentPlayer].money < item.price}"
              v-html="item.icon"
            />
            {{ item.price }}$
          </div>
        </div>
      </div>
      <div class="phases-panel">
        <div
          class="phase-panel"
          :style="{backgroundColor: phaseIndex === currentPhase ? player.color : 'inherit'}"
          v-for="(phase, phaseIndex) in phases"
          :key="phaseIndex"
          @click="changePhase(phaseIndex)"
        >{{ phase.label }}</div>
      </div>
    </div>
    <div class="board">
      <rows
        :players="players"
        :rows="rows"
        @cell-was-clicked="([rowIndex, cellIndex]) => handleCellClick(rowIndex, cellIndex)"
      />
    </div>
  </div>
</template>

<script>
import colors from '../game-config/colors/defaults'
import Rows from '../components/Rows'
import defaultMapConfig from '../game-config/maps/default'
import shopTanksConfig from '../game-config/shop/tanks'
import shopItemsConfig from '../game-config/shop/items'
import phasesConfig from '../game-config/phases/default'
import playersConfig from '../game-config/players/default'
import Asvg from '../components/svg-templates/A'
import Bsvg from '../components/svg-templates/B'
import Csvg from '../components/svg-templates/C'
import Dsvg from '../components/svg-templates/D'
import Esvg from '../components/svg-templates/E'
export default {
  name: 'Home',
  components: {
    Rows,
    Asvg,
    Bsvg,
    Csvg,
    Dsvg,
    Esvg
  },
  data: () => {
    return {
      currentCell: null,
      currentPlayer: 0,
      currentPhase: 0,
      phases: phasesConfig,
      players: playersConfig,
      shopTanks: shopTanksConfig,
      shopItems: shopItemsConfig,
      rows: defaultMapConfig
    }
  },
  methods: {
    notify (type) {
      if (type === 'phase was changed') {
        this.$notify({
          group: 'phases',
          clean: true
        })
        this.$notify({
          group: 'phases',
          title: `player "${this.players[this.currentPlayer].name}"<br />phase "${this.phases[this.currentPhase].label.toUpperCase()}"`
        })
      }
    },
    handleTankPanelTankMouseEnter (tank) {
      tank.isHoveredOnInfo = true
      if (this.canTankAttack(tank)) {
        this.setRangeColor(tank.positions.x, tank.positions.y, colors.attack)
      }
      if (this.canTankMove(tank)) {
        this.setSurroundingTalesColor(tank.positions.x, tank.positions.y, colors.move)
      }
    },
    handleTankPanelTankMouseLeave (tank) {
      tank.isHoveredOnInfo = false
      this.resetBoardColors()
    },
    resetBoardColors () {
      this.rows.map((r) => {
        r.map((c) => {
          if (this.isNotHoleOrWall(c)) {
            c.backgroundColor = colors.base
          }
        })
      })
    },
    handleCellClick (rowIndex, cellIndex) {
      /** Todo: auth check is current user */
      const cell = this.rows[rowIndex][cellIndex]
      if (!this.isNotHoleOrWall(cell)) {
        return
      }
      if (this.currentPhase === 0) { /** Is "setup" phase. */
        if (cell.item && this.isNotHoleOrWall(cell) && this.canTankMove(cell.item)) { /** Tank is on cell, prepare movement. */
          this.resetBoardColors()
          this.changePhase(this.currentPhase + 1, false)
          this.handleCellClick(rowIndex, cellIndex)
        } else if (cell.item && this.isNotHoleOrWall(cell) && !this.canTankMove(cell.item) && this.canTankAttack(cell.item)) { /** Tank is on cell, cannot move, but can attack. */
          this.resetBoardColors()
          this.currentPhase++
          this.changePhase(this.currentPhase + 1, false)
          this.handleCellClick(rowIndex, cellIndex)
        } else if (cell.item === null && cell.baseType === 'respondSpot') { /** Cell is from respond baseType, and no item is there. */
          this.putTankOnBoard(rowIndex, cellIndex)
        }
      } else if (this.currentPhase === 1 || this.currentPhase === 3) { /** Is first or second "movements" phase. */
        if (cell.item && this.isNotHoleOrWall(cell) && this.isOwnTank(cell.item) && this.canTankMove(cell.item) && cell.backgroundColor === colors.base) { /** Tank have moves and cell is "base" color. */
          this.resetBoardColors()
          this.setCurrentCell(rowIndex, cellIndex)
          this.setSurroundingTalesColor(rowIndex, cellIndex, colors.move)
        } else if (cell.item && this.isNotHoleOrWall(cell) && this.isOwnTank(cell.item) && this.canTankMove(cell.item) && cell.backgroundColor === colors.move) { /** Tank have moves and cell is "move" color. */
          this.currentCell = null
          this.resetBoardColors(rowIndex, cellIndex, colors.base)
        } else if (!cell.item && this.isNotHoleOrWall(cell) && cell.backgroundColor === colors.move) { /** Cell is that tank can move into. */
          this.moveTank(rowIndex, cellIndex)
          this.handleCellClick(rowIndex, cellIndex)
        } else { /** Resets need to be done. */
          this.currentCell = null
          this.resetBoardColors()
        }
        if (!this.canTanksMoves()) { /** No more moves are available - resets need to be done. */
          this.resetBoardColors()
          this.currentCell = null
          this.changePhase(this.currentPhase === 1 ? 2 : 4, false)
        }
      } else if (this.currentPhase === 2) { /** Is "attacks" phase. */
        if (cell.item && this.isNotHoleOrWall(cell) && this.isOwnTank(cell.item) && this.canTankAttack(cell.item) && cell.backgroundColor !== colors.attack) { /** Tank is on this not-"attack" colored cell, show the tank`s range. */
          this.resetBoardColors()
          this.setCurrentCell(rowIndex, cellIndex)
          this.setRangeColor(rowIndex, cellIndex, colors.attack)
        } else if (cell.item && this.isNotHoleOrWall(cell) && this.isOwnTank(cell.item) && this.canTankAttack(cell.item) && this.rows[rowIndex][cellIndex].item && (this.rows[rowIndex][cellIndex].item.positions.x === this.currentCell.x && this.rows[rowIndex][cellIndex].item.positions.y === this.currentCell.y) && cell.backgroundColor === colors.attack) { /** Tank range is shown, hide the range. */
          this.currentCell = null
          this.resetBoardColors()
        } else if (this.cellCanBeAttacked(cell, rowIndex, cellIndex)) { /** Cell is "attack" color and have target - perform attack. */
          const tank = this.getTankByCurrentCell()
          if (this.canTankAttack(tank)) {
            this.attackWasTriggered(tank)
            this.incrementTankExp(tank)
            this.hitTheTarget(tank, rowIndex, cellIndex)
            this.afterTankAttack()
          }
        } else if (cell.backgroundColor === colors.attack) { /** Cell is "attack" colors, but without target - perform missing attack. */
          const tank = this.getTankByCurrentCell()
          if (this.canTankAttack(tank)) {
            this.attackWasTriggered(tank)
            this.incrementTankExp(tank)
            this.afterTankAttack()
            this.makeHole(rowIndex, cellIndex)
          }
        }
        if (cell.item === null && cell.backgroundColor === colors.base) { /** Cell is "base" color. */
          this.currentCell = null
          this.resetBoardColors()
        }
      }
    },
    makeHole (rowIndex, cellIndex) {
      this.rows[rowIndex][cellIndex].baseType = 'hole'
      this.rows[rowIndex][cellIndex].backgroundColor = colors.hole
    },
    setCurrentCell (rowIndex, cellIndex) {
      this.currentCell = {
        x: rowIndex,
        y: cellIndex
      }
    },
    cellExist (i, j) {
      return !!(this.rows[i] && this.rows[i][j])
    },
    isNotRespSpot (cell) {
      return cell.baseType !== 'respondSpot'
    },
    isNotHole (cell) {
      return cell.baseType !== 'hole'
    },
    isCellExistAndNotHole (i, j) {
      return !!(this.cellExist(i, j) && this.isNotHole(this.rows[i][j]))
    },
    isCellExistAndNotWall (i, j) {
      return !!(this.cellExist(i, j) && this.isNotWall(this.rows[i][j]))
    },
    isCellExistAndIsWall (i, j) {
      return !!(this.cellExist(i, j) && !this.isNotWall(this.rows[i][j]))
    },
    isNotWall (cell) {
      return cell.baseType !== 'wall'
    },
    isNotHoleOrWall (cell) {
      return this.isNotHole(cell) && this.isNotWall(cell)
    },
    processingClearingTheRangeCell (rowIndex, cellIndex, clear) {
      if (!this.isNotWall(this.rows[rowIndex][cellIndex])) {
        clear = true
      }
      if (clear && this.isNotHoleOrWall(this.rows[rowIndex][cellIndex])) {
        this.rows[rowIndex][cellIndex].backgroundColor = colors.base
      }
      return clear
    },

    /**
     *   X X 0
     *   0 0 0
     *   0 0 0
     */
    clearRangeColorForCellUpAndLeft (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellUpAndLeft(rowIndex - 1, cellIndex - 1, range - 1, clear)
        this.clearRangeColorForCellUp(rowIndex, cellIndex - 1, range - 1, clear, true)
      }
    },

    /**
     *   0 X 0
     *   0 0 0
     *   0 0 0
     */
    clearRangeColorForCellUp (rowIndex, cellIndex, range, clear = false, noExtraDirections = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        if (noExtraDirections) {
          this.clearRangeColorForCellUp(rowIndex, cellIndex - 1, range - 1, clear, true)
        } else {
          this.clearRangeColorForCellUpAndLeft(rowIndex - 1, cellIndex - 1, range - 1, clear)
          this.clearRangeColorForCellUp(rowIndex, cellIndex - 1, range - 1, clear)
          this.clearRangeColorForCellUpAndRight(rowIndex + 1, cellIndex - 1, range - 1, clear)
        }
      }
    },

    /**
     *   0 X X
     *   0 0 0
     *   0 0 0
     */
    clearRangeColorForCellUpAndRight (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellUp(rowIndex, cellIndex - 1, range - 1, clear, true)
        this.clearRangeColorForCellUpAndRight(rowIndex + 1, cellIndex - 1, range - 1, clear)
      }
    },

    /**
     *   0 0 X
     *   0 0 X
     *   0 0 0
     */
    clearRangeColorForCellRightAndUp (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellRightAndUp(rowIndex + 1, cellIndex - 1, range - 1, clear)
        this.clearRangeColorForCellRight(rowIndex + 1, cellIndex, range - 1, clear, true)
      }
    },

    /**
     *   0 0 0
     *   0 0 X
     *   0 0 0
     */
    clearRangeColorForCellRight (rowIndex, cellIndex, range, clear = false, noExtraDirections = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        if (noExtraDirections) {
          this.clearRangeColorForCellRight(rowIndex + 1, cellIndex, range - 1, clear, true)
        } else {
          this.clearRangeColorForCellRightAndUp(rowIndex + 1, cellIndex - 1, range - 1, clear)
          this.clearRangeColorForCellRight(rowIndex + 1, cellIndex, range - 1, clear)
          this.clearRangeColorForCellRightAndDown(rowIndex + 1, cellIndex + 1, range - 1, clear)
        }
      }
    },

    /**
     *   0 0 0
     *   0 0 X
     *   0 0 X
     */
    clearRangeColorForCellRightAndDown (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellRight(rowIndex + 1, cellIndex, range - 1, clear, true)
        this.clearRangeColorForCellRightAndDown(rowIndex + 1, cellIndex + 1, range - 1, clear)
      }
    },

    /**
     *   0 0 0
     *   0 0 0
     *   X X 0
     */
    clearRangeColorForCellDownAndLeft (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellDownAndLeft(rowIndex - 1, cellIndex + 1, range - 1, clear)
        this.clearRangeColorForCellDown(rowIndex, cellIndex + 1, range - 1, clear, true)
      }
    },

    /**
     *   0 0 0
     *   0 0 0
     *   0 X 0
     */
    clearRangeColorForCellDown (rowIndex, cellIndex, range, clear = false, noExtraDirections = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        if (noExtraDirections) {
          this.clearRangeColorForCellDown(rowIndex, cellIndex + 1, range - 1, clear, true)
        } else {
          this.clearRangeColorForCellDownAndLeft(rowIndex - 1, cellIndex + 1, range - 1, clear)
          this.clearRangeColorForCellDown(rowIndex, cellIndex + 1, range - 1, clear)
          this.clearRangeColorForCellDownAndRight(rowIndex + 1, cellIndex + 1, range - 1, clear)
        }
      }
    },

    /**
     *   0 0 0
     *   0 0 0
     *   0 X X
     */
    clearRangeColorForCellDownAndRight (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellDown(rowIndex, cellIndex + 1, range - 1, clear, true)
        this.clearRangeColorForCellDownAndRight(rowIndex + 1, cellIndex + 1, range - 1, clear)
      }
    },

    /**
     *   X 0 0
     *   X 0 0
     *   0 0 0
     */
    clearRangeColorForCellLeftAndUp (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellLeftAndUp(rowIndex - 1, cellIndex - 1, range - 1, clear)
        this.clearRangeColorForCellLeft(rowIndex - 1, cellIndex, range - 1, clear, true)
      }
    },

    /**
     *   0 0 0
     *   X 0 0
     *   0 0 0
     */
    clearRangeColorForCellLeft (rowIndex, cellIndex, range, clear = false, noExtraDirections = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        if (noExtraDirections) {
          this.clearRangeColorForCellLeft(rowIndex - 1, cellIndex, range - 1, clear, true)
        } else {
          this.clearRangeColorForCellLeftAndUp(rowIndex - 1, cellIndex - 1, range - 1, clear)
          this.clearRangeColorForCellLeft(rowIndex - 1, cellIndex, range - 1, clear)
          this.clearRangeColorForCellLeftAndDown(rowIndex - 1, cellIndex + 1, range - 1, clear)
        }
      }
    },

    /**
     *   0 0 0
     *   X 0 0
     *   X 0 0
     */
    clearRangeColorForCellLeftAndDown (rowIndex, cellIndex, range, clear = false) {
      if (range && this.cellExist(rowIndex, cellIndex)) {
        clear = this.processingClearingTheRangeCell(rowIndex, cellIndex, clear)
        this.clearRangeColorForCellLeft(rowIndex - 1, cellIndex, range - 1, clear, true)
        this.clearRangeColorForCellLeftAndDown(rowIndex - 1, cellIndex + 1, range - 1, clear)
      }
    },
    clearUnreachableRange (rowIndex, cellIndex, range) {
      this.clearRangeColorForCellUpAndLeft(rowIndex - 1, cellIndex - 1, range, false, true)
      this.clearRangeColorForCellUp(rowIndex, cellIndex - 1, range)
      this.clearRangeColorForCellUpAndRight(rowIndex + 1, cellIndex - 1, range, false, true)
      this.clearRangeColorForCellRightAndUp(rowIndex + 1, cellIndex - 1, range, false, true)
      this.clearRangeColorForCellRight(rowIndex + 1, cellIndex, range)
      this.clearRangeColorForCellRightAndDown(rowIndex + 1, cellIndex + 1, range, false, true)
      this.clearRangeColorForCellDownAndLeft(rowIndex - 1, cellIndex + 1, range, false, true)
      this.clearRangeColorForCellDown(rowIndex, cellIndex + 1, range)
      this.clearRangeColorForCellDownAndRight(rowIndex + 1, cellIndex + 1, range, false, true)
      this.clearRangeColorForCellLeftAndUp(rowIndex - 1, cellIndex - 1, range, false, true)
      this.clearRangeColorForCellLeft(rowIndex - 1, cellIndex, range)
      this.clearRangeColorForCellLeftAndDown(rowIndex - 1, cellIndex + 1, range, false, true)
    },
    setRangeColor (rowIndex, cellIndex, color) {
      const cells = [...this.rows]
      const range = cells[rowIndex][cellIndex].item.range
      this.rows[rowIndex][cellIndex].backgroundColor = color
      cells.map(r => {
        r.map(() => {
          for (let i = 0; i <= range; i++) {
            for (let j = 0; j <= range; j++) {
              if (this.cellExist(rowIndex + i, cellIndex + j) && this.isNotHoleOrWall(cells[rowIndex + i][cellIndex + j])) {
                this.rows[rowIndex + i][cellIndex + j].backgroundColor = color
              }
            }
          }
          for (let i = range; i >= 0; i--) {
            for (let j = 0; j <= range; j++) {
              if (this.cellExist(rowIndex - i, cellIndex + j) && this.isNotHoleOrWall(cells[rowIndex - i][cellIndex + j])) {
                this.rows[rowIndex - i][cellIndex + j].backgroundColor = color
              }
            }
          }
          for (let i = 0; i <= range; i++) {
            for (let j = range; j >= 0; j--) {
              if (this.cellExist(rowIndex + i, cellIndex - j) && this.isNotHoleOrWall(cells[rowIndex + i][cellIndex - j])) {
                this.rows[rowIndex + i][cellIndex - j].backgroundColor = color
              }
            }
          }
          for (let i = range; i >= 0; i--) {
            for (let j = range; j >= 0; j--) {
              if (this.cellExist(rowIndex - i, cellIndex - j) && this.isNotHoleOrWall(cells[rowIndex - i][cellIndex - j])) {
                this.rows[rowIndex - i][cellIndex - j].backgroundColor = color
              }
            }
          }
        })
      })
      this.clearUnreachableRange(rowIndex, cellIndex, range)
    },
    setSurroundingTalesColor (i, j, color) {
      const operations = [
        [i, j],
        [i, j + 1],
        [i, j - 1],
        [i + 1, j],
        [i - 1, j],
        [i - 1, j + 1],
        [i + 1, j - 1],
        [i - 1, j - 1],
        [i + 1, j + 1]
      ]
      operations.map(operation => {
        if (this.cellExist(operation[0], operation[1]) && this.isNotHoleOrWall(this.rows[operation[0]][operation[1]]) && !this.rows[operation[0]][operation[1]].item) {
          this.rows[operation[0]][operation[1]].backgroundColor = color
        }
      })
    },
    getTankByCurrentCell () {
      return this.players[this.currentPlayer].tanks.find(tank => {
        return tank.positions.x === this.currentCell.x && tank.positions.y === this.currentCell.y
      })
    },
    moveTank (rowIndex, cellIndex) {
      this.setSurroundingTalesColor(this.currentCell.x, this.currentCell.y, colors.base)
      this.players[this.currentPlayer].tanks.forEach(tank => {
        if (tank.positions.x === this.currentCell.x && tank.positions.y === this.currentCell.y) {
          tank.positions.x = rowIndex
          tank.positions.y = cellIndex
          tank.moves--
          tank.fuel--
          this.rows[this.currentCell.x][this.currentCell.y].item = null
          this.rows[rowIndex][cellIndex].item = tank
        }
      })
    },
    cellCanBeAttacked (cell, rowIndex, cellIndex) {
      return (cell.backgroundColor === colors.attack &&
        this.isNotHoleOrWall(cell) &&
        this.rows[rowIndex][cellIndex].item &&
        (
          (this.rows[rowIndex][cellIndex].item.positions.x !== this.currentCell.x && this.rows[rowIndex][cellIndex].item.positions.y !== this.currentCell.y) ||
          (this.rows[rowIndex][cellIndex].item.positions.x === this.currentCell.x && this.rows[rowIndex][cellIndex].item.positions.y !== this.currentCell.y) ||
          (this.rows[rowIndex][cellIndex].item.positions.x !== this.currentCell.x && this.rows[rowIndex][cellIndex].item.positions.y === this.currentCell.y)
        ))
    },
    canTankMove (tank) {
      return tank.moves > 0 && tank.fuel > 0
    },
    canTanksMoves () {
      return this.players[this.currentPlayer].tanks.some(tank => {
        return !tank.isDead && tank.isOnBoard && this.canTankMove(tank)
      })
    },
    canTankAttack (tank) {
      return tank.attackWasTriggered === false && tank.ammo > 0
    },
    canTanksAttacks () {
      return this.players[this.currentPlayer].tanks.some(tank => {
        return !tank.isDead && tank.isOnBoard && this.canTankAttack(tank)
      })
    },
    attackWasTriggered (tank) {
      tank.attackWasTriggered = true
      tank.ammo--
    },
    afterTankAttack () {
      if (!this.canTanksAttacks() && !this.canTanksMoves()) {
        this.currentPhase = 3
        this.changePhase(4, false)
      } else if (!this.canTanksAttacks() && this.canTanksMoves()) {
        this.currentPhase = 2
        this.changePhase(3, false)
      } else {
        this.currentCell = null
        this.resetBoardColors()
      }
    },
    hitTheTarget (tank, rowIndex, cellIndex) {
      this.players.forEach(player => {
        player.tanks.forEach(target => {
          if (target.positions.x === rowIndex && target.positions.y === cellIndex) {
            target.health -= tank.damage
            if (target.health < 1) {
              this.players[this.currentPlayer].exp += (3 + (target.level * 2))
              this.incrementTankExp(tank, 4 + (target.level > tank.level ? Math.floor((target.level - tank.level) * 1.5) - 1 : 1))
              this.incrementPlayerBonusPoints(this.players[this.currentPlayer])
              target.positions.x = null
              target.y = null
              target.isOnBoard = false
              target.isDead = true
              this.rows[rowIndex][cellIndex].item = null
            }
          }
        })
      })
    },
    changePhase (phaseIndex, manual = true) {
      /** Todo: auth check is current user */
      this.currentCell = null
      this.resetBoardColors()
      if (manual && phaseIndex > this.currentPhase) {
        if (phaseIndex === 1 && !this.canTanksMoves() && this.canTanksAttacks()) {
          this.currentPhase += 2
        } else if (phaseIndex === 3 && !this.canTanksMoves()) {
          this.currentPhase++
          this.changePhase(4, false)
        } else if (phaseIndex === 4) {
          this.players[this.currentPlayer].exp++
          const exp = this.players[this.currentPlayer].exp
          this.players[this.currentPlayer].money += Math.ceil(exp / 10)
          this.currentPhase = 0
          this.prepareNextPlayerStuff()
        } else {
          this.currentPhase = phaseIndex
        }
        this.notify('phase was changed')
      } else {
        if (phaseIndex === this.currentPhase + 1) {
          if (phaseIndex === 4 || (phaseIndex === 3 && !this.canTanksMoves())) {
            this.players[this.currentPlayer].exp++
            const exp = this.players[this.currentPlayer].exp
            this.players[this.currentPlayer].money += Math.ceil(exp / 10)
            this.resetBoardColors()
            this.currentPhase = 0
            this.prepareNextPlayerStuff()
          } else {
            if ((phaseIndex === 2 && this.currentCell) || (phaseIndex === 4 && this.currentCell)) {
              this.setSurroundingTalesColor(this.currentCell.x, this.currentCell.y, colors.base)
            }
            this.currentPhase++
          }
          this.notify('phase was changed')
        }
      }
    },
    prepareNextPlayerStuff () {
      const nextPlayerIndex = (this.currentPlayer + 1) === this.players.length ? 0 : (this.currentPlayer + 1)
      this.players.forEach((player, playerIndex) => {
        if (playerIndex === nextPlayerIndex) {
          player.tanks.forEach(tank => {
            if (tank.isOnBoard) {
              tank.moves = tank.speed
              tank.attackWasTriggered = false
              this.incrementTankExp(tank)
            }
          })
        }
      })
      this.currentPlayer = nextPlayerIndex
    },
    incrementTankExp (tank, times = 1) {
      tank.exp++
      if (tank.exp % 10 === 0) {
        this.incrementTankLevel(tank)
      }
      times--
      if (times > 0) {
        this.incrementTankExp(tank, times)
      }
    },
    incrementTankLevel (tank) {
      tank.level++
      this.incrementPlayerBonusPoints(this.players.find(p => p.id === tank.playerId))
    },
    incrementPlayerBonusPoints (player) {
      player.items.bonusPoints.quantity++
    },
    isOwnTank (tank) {
      return tank.playerId === this.players[this.currentPlayer].id
    },
    buyTank (shopTankIndex) {
      /** Todo: auth check is current user */
      if (this.currentPhase === 0) {
        const money = this.players[this.currentPlayer].money
        const tank = JSON.parse(JSON.stringify(this.shopTanks[shopTankIndex]))
        if (money >= tank.price) {
          this.players[this.currentPlayer].money -= tank.price
          tank.id = this.players.reduce((accumulator, player) => {
            return accumulator + player.tanks.length
          }, 1)
          tank.playerId = this.players[this.currentPlayer].id
          this.players[this.currentPlayer].tanks.push(tank)
          this.players[this.currentPlayer].exp += 2
        }
      }
    },
    putTankOnBoard (rowIndex, cellIndex) {
      /** Todo: auth check is current user */
      const tanksQuantity = this.players[this.currentPlayer].tanks.length
      for (let i = 0; i < tanksQuantity; i++) {
        if (!this.players[this.currentPlayer].tanks[i].isOnBoard && !this.players[this.currentPlayer].tanks[i].isDead) {
          this.players[this.currentPlayer].tanks[i].isOnBoard = true
          this.players[this.currentPlayer].tanks[i].positions.x = rowIndex
          this.players[this.currentPlayer].tanks[i].positions.y = cellIndex
          this.$set(this.rows[rowIndex][cellIndex], 'item', this.players[this.currentPlayer].tanks[i])
          this.players[this.currentPlayer].exp += 2
          break
        }
      }
    },
    buyItem (itemIndex) {
      if (this.currentPhase === 0) {
        const item = this.shopItems[itemIndex]
        const player = this.players[this.currentPlayer]
        if (player.money >= item.price) {
          player.money -= item.price
          player.items[item.label].quantity += 1
        }
      }
    },
    useItem (tank, label) {
      if (this.currentPhase === 0) {
        const player = this.players[this.currentPlayer]
        switch (label) {
          case 'speed':
            if (player.items.bonusPoints.quantity > 0) {
              player.items.bonusPoints.quantity--
              tank.speed++
              tank.moves++
            }
            break
          case 'range':
            if (player.items.bonusPoints.quantity > 0) {
              player.items.bonusPoints.quantity--
              tank.range++
            }
            break
          case 'damage':
            if (player.items.bonusPoints.quantity > 0) {
              player.items.bonusPoints.quantity--
              tank.damage++
            }
            break
          case 'baseHealth':
            if (player.items.bonusPoints.quantity > 0) {
              player.items.bonusPoints.quantity--
              tank.baseHealth++
              tank.health++
            }
            break
          case 'ammo':
            if (player.items[label].quantity > 0) {
              player.items[label].quantity--
              tank.ammo += 1
              player.exp += 1
            }
            break
          case 'fuel':
            if (player.items[label].quantity > 0) {
              player.items[label].quantity--
              tank.fuel += 1
              player.exp += 1
            }
            break
          case 'health':
            if (player.items[label].quantity > 0 && tank.baseHealth >= tank.health + 1) {
              player.items[label].quantity--
              tank.health += 1
              player.exp += 1
            }
            break
        }
      }
    },
    massAttack (index) {
      if ((this.currentPhase === 1 || this.currentPhase === 2 || this.currentPhase === 3) && index === 'massAttack' && this.players[this.currentPlayer].items[index].quantity > 0) {
        this.players[this.currentPlayer].items[index].quantity--
        this.players.forEach(p => {
          p.tanks.forEach(t => {
            if (t.isOnBoard) {
              t.health -= 2
              this.players[this.currentPlayer].exp += 1
              if (t.health <= 0) {
                t.isOnBoard = false
                t.isDead = true
                this.rows[t.positions.x][t.positions.y].item = null
                this.players[this.currentPlayer].exp += (2 * t.level)
              }
            }
          })
        })
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
    user-select: none;
  }
  .screen {
    display: flex;
    width: 100%;
    height: 100vmin;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    background-color: #faac09;
  }
  .player-panel {
    display: flex;
    flex-direction: column;
    width: 50vmin;
    height: 90vmin;
    border: 1px solid blue;
    justify-content: space-evenly;
    align-items: center;
  }
  .users-panel {
    display: flex;
    width: 45vmin;
    height: 5vmin;
    justify-content: space-evenly;
    align-items: center;
  }
  .user-panel {
    display: flex;
    width: 100%;
    height: 5vmin;
    justify-content: center;
    align-items: center;
    font-size: 1.1vmin;
  }
  .tanks-panel {
    display: flex;
    flex-direction: column;
    width: 45vmin;
    height: 45vmin;
    border: 1px solid blue;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
  }
  .tank-panel {
    display: flex;
    flex-wrap: wrap;
    width: 40vmin;
    min-height: 5vmin;
    justify-content: flex-start;
    align-items: center;
    font-size: 2.5vmin;
  }
  .tank-panel:not(:first-child) {
    border-top: 1px solid blue;
  }
  .tank-panel:hover {
    background-color: #fa800d;
  }
  .tank-panel-item:first-child {
    width: 100%;
  }
  .tank-panel-item:not(:first-child) {
    width: 20%;
  }
  .tank-panel-item:nth-child(3) {
    margin-right: 50%;
  }
  .tank-panel-item:nth-child(2), .tank-panel-item:nth-child(4), .tank-panel-item:nth-child(8) {
    margin-left: 10%;
  }
  .shop-panel {
    display: flex;
    width: 45vmin;
    height: 5vmin;
    justify-content: space-between;
    align-items: center;
    font-size: 2vmin;
  }
  .shop-tanks {
    display: flex;
    width: 45vmin;
    height: 5vmin;
    justify-content: center;
    align-items: center;
  }
  .shop-tank {
    display: flex;
    width: 20%;
    height: 5vmin;
    border: 1px solid blue;
    justify-content: center;
    align-items: center;
  }
  .shop-items, .items-items {
    display: flex;
    width: 100%;
    height: 5vmin;
    justify-content: center;
    align-items: center;
  }
  .shop-item {
    display: flex;
    width: 100%;
    height: 5vmin;
    border: 1px solid blue;
    justify-content: center;
    align-items: center;
  }
  .shop-item-icon, .items-item-icon {
    font-size: 2.5vmin;
  }
  .shop-tank-icon-zero, .shop-item-icon-zero, .items-item-icon-zero {
    opacity: .5;
  }
  .tank-panel-icon-not-zero, .tank-panel-item-icon-not-zero {
    background-color: yellowgreen;
    border-radius: 5px;
  }
  .phases-panel {
    display: flex;
    width: 45vmin;
    height: 5vmin;
    justify-content: center;
    align-items: center;
  }
  .phase-panel {
    display: flex;
    width: 20%;
    height: 5vmin;
    border: 1px solid blue;
    justify-content: center;
    align-items: center;
    font-size: 1.7vmin;
  }
  .items-panel {
    display: flex;
    width: 45vmin;
    height: 5vmin;
    border: 1px solid blue;
    justify-content: center;
    align-items: center;
    font-size: 2vmin;
  }
  .board {
    display: flex;
    width: 90vmin;
    height: 90vmin;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
