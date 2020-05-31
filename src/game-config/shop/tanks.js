export default [
  /** basic tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    message: '',
    price: 40,
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
    damage: 2,
    health: 4,
    fuel: 0,
    ammo: 0
  },
  /** runner tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    message: '',
    price: 46,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 6,
    baseHealth: 4,
    positions: {
      x: null,
      y: null
    },
    type: 'B',
    baseType: 'tank',
    speed: 6,
    range: 3,
    damage: 2,
    health: 4,
    fuel: 0,
    ammo: 0
  },
  /** rangy tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    message: '',
    price: 59,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 3,
    baseHealth: 4,
    positions: {
      x: null,
      y: null
    },
    type: 'C',
    baseType: 'tank',
    speed: 3,
    range: 8,
    damage: 3,
    health: 4,
    fuel: 0,
    ammo: 0
  },
  /** healthy tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    message: '',
    price: 52,
    isOnBoard: false,
    isDead: false,
    attackWasTriggered: false,
    moves: 3,
    baseHealth: 8,
    positions: {
      x: null,
      y: null
    },
    type: 'D',
    baseType: 'tank',
    speed: 3,
    range: 3,
    damage: 2,
    health: 8,
    fuel: 0,
    ammo: 0
  },
  /** tower tank */
  {
    level: 1,
    exp: 0,
    playerId: null,
    isHoveredOnBoard: false,
    isHoveredOnInfo: false,
    message: '',
    price: 63,
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
    health: 12,
    fuel: 0,
    ammo: 0
  }
]
