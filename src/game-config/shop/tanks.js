const baseProps = {
  level: 1,
  exp: 0,
  playerId: null,
  isHoveredOnBoard: false,
  isHoveredOnInfo: false,
  message: '',
  isOnBoard: false,
  isDead: false,
  attackWasTriggered: false,
  positions: {
    x: null,
    y: null
  },
  baseType: 'tank',
  icons: {
    level: {
      title: '\n 🏆 is tank level. \n',
      icon: '🏆'
    },
    exp: {
      title: '\n 🎖 is tank EXPERIENCE POINTS. \n\n For every 10🎖, tank will increase his 🏆 by 1. \n\n When 🏆 is increased, you get UPGRADE POINT(👆). \n',
      icon: '🎖'
    },
    speed: {
      title: ' \n ⌛ is the MAXIMUM available MOVES(👟), tank can perform. \n\n You can upgrade ⌛ with UPGRADE POINTS(👆). \n\n When you upgrade ⌛, 1👟 will be added automatically to this tank. \n',
      icon: '⌛'
    },
    range: {
      title: ' \n 🎯 is MAXIMUM squares tank`s attack can reach. \n\n WALLS will block the 🎯. \n\n Holes do not affect the 🎯, you can shoot over them. \n\nYou can upgrade 🎯 with UPGRADE POINTS(👆). \n',
      icon: '🎯'
    },
    damage: {
      title: ' \n 🗡 is how much DAMAGE the tank will make to the target. \n\n You can upgrade 🗡 with UPGRADE POINTS(👆). \n',
      icon: '🗡'
    },
    baseHealth: {
      title: ' \n 🛡 is tank MAXIMUM HEALTH. \n\n You can`t repair tank`s health(🖤) if health is not smaller then 🛡. \n\n You can upgrade 🛡 with UPGRADE POINTS(👆). \n\n When you upgrade 🛡, 1🖤 will be added automatically to this tank. \n',
      icon: '🛡'
    },
    moves: {
      title: ' \n 👟 is indicator that count how many MOVES tank can perform this turn. \n\n Every MOVE will decrease 👟 by 1 and cost 1 fuel(🛢). \n\n If tank 🛢 = 0 or 👟 = 0, MOVE is not available. \n\n On your SETUP phase, 👟 will be reset to tank speed(⌛). \n',
      icon: '👟'
    },
    fuel: {
      title: ' \n 🛢 is tank FUEL. \n\n Every tank MOVE will require 1🛢. \n\n If 🛢 = 0, tank MOVE is not available. \n\n Click to add 1🛢 from your items to the tank. \n\n If you have 0🛢 and have enough money to buy one, 1🛢 will be purchased and added to the tank. \n',
      icon: '🛢'
    },
    ammo: {
      title: ' \n 💣 is tank AMMO. \n\n Every ATTACK will decrease 💣 by 1. \n\n If 💣 = 0, ATTACK is not available. \n\n Click to add 1💣 from your items to the tank. \n\n If you have 0💣 and have enough money to buy one, 1💣 will be purchased and added to the tank. \n',
      icon: '💣'
    },
    health: {
      title: ' \n 🖤 is tank HEALTH. \n\n If 🖤 is 0 or below, tank is destroyed and will be removed from the BOARD. \n\n You can use 🔧 to repair 1🖤, only if 🖤 is smaller then tank MAXIMUM HEALTH(🛡). \n\n Click to use 1🔧 from your items. \n\n If you have 0🔧 and have enough money to buy one, 1🔧 will be purchased and used from the tank. \n',
      icon: '🖤'
    }
  }
}

export default [
  /** jeep */
  {
    ...baseProps,
    price: 19,
    moves: 8,
    baseHealth: 1,
    subTypeLabel: 'F',
    speed: 8,
    range: 0,
    damage: 0,
    health: 1,
    fuel: 0,
    ammo: 0
  },
  /** basic tank */
  {
    ...baseProps,
    price: 40,
    moves: 3,
    baseHealth: 4,
    subTypeLabel: 'A',
    speed: 3,
    range: 3,
    damage: 2,
    health: 4,
    fuel: 0,
    ammo: 0
  },
  /** runner tank */
  {
    ...baseProps,
    price: 46,
    moves: 6,
    baseHealth: 4,
    subTypeLabel: 'B',
    speed: 6,
    range: 3,
    damage: 2,
    health: 4,
    fuel: 0,
    ammo: 0
  },
  /** rangy tank */
  {
    ...baseProps,
    price: 59,
    moves: 3,
    baseHealth: 4,
    subTypeLabel: 'C',
    speed: 3,
    range: 8,
    damage: 3,
    health: 4,
    fuel: 0,
    ammo: 0
  },
  /** healthy tank */
  {
    ...baseProps,
    price: 52,
    moves: 3,
    baseHealth: 8,
    subTypeLabel: 'D',
    speed: 3,
    range: 3,
    damage: 2,
    health: 8,
    fuel: 0,
    ammo: 0
  },
  /** tower tank */
  {
    ...baseProps,
    price: 63,
    moves: 0,
    baseHealth: 6,
    subTypeLabel: 'E',
    speed: 0,
    range: 6,
    damage: 1,
    health: 12,
    fuel: 0,
    ammo: 0
  }
]
