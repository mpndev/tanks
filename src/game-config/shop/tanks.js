export default [
  /** basic tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    price: 33,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 3,
    baseHealth: 4,
    positions: {
      x: null,
      y: null
    },
    type: 'A',
    baseType: 'tank',
    speed: 3,
    range: 3,
    damage: 3,
    health: 4,
    fuel: 20,
    ammo: 12
  },
  /** runner tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    price: 33,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 5,
    baseHealth: 2,
    positions: {
      x: null,
      y: null
    },
    type: 'B',
    baseType: 'tank',
    speed: 5,
    range: 3,
    damage: 2,
    health: 2,
    fuel: 21,
    ammo: 8
  },
  /** rangy tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    price: 33,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 2,
    baseHealth: 3,
    positions: {
      x: null,
      y: null
    },
    type: 'C',
    baseType: 'tank',
    speed: 2,
    range: 5,
    damage: 3,
    health: 3,
    fuel: 20,
    ammo: 10
  },
  /** healthy tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    price: 33,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 2,
    baseHealth: 6,
    positions: {
      x: null,
      y: null
    },
    type: 'D',
    baseType: 'tank',
    speed: 2,
    range: 4,
    damage: 2,
    health: 6,
    fuel: 19,
    ammo: 10
  },
  /** tower tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    price: 33,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 0,
    baseHealth: 6,
    positions: {
      x: null,
      y: null
    },
    type: 'E',
    baseType: 'tank',
    speed: 0,
    range: 6,
    damage: 1,
    health: 6,
    fuel: 20,
    ammo: 16
  }
]
