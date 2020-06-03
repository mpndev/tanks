const userTemplate = {
  exp: 0,
  money: 70,
  tanks: [],
  items: {
    ammo: {
      quantity: 0,
      playerPanelTitle: 'Your tanks need this to perform attacks.\n1💣 = 1 attack.',
      icon: '💣'
    },
    fuel: {
      quantity: 0,
      playerPanelTitle: 'Your tanks need this to move across the board.\n1🛢 = 1 move.',
      icon: '🛢'
    },
    health: {
      quantity: 0,
      playerPanelTitle: 'You can repeat tanks health with this.\n1🔧 will increase tank 🖤 with 1, if tank 🖤 is smaller then tank 🛡.',
      icon: '🔧'
    },
    massAttack: {
      quantity: 0,
      playerPanelTitle: 'Click to perform MASS ATTACK️.\nThis action will perform 2 damage to ALL tanks on the board.',
      icon: '✈️'
    },
    bonusPoints: {
      quantity: 0,
      playerPanelTitle: '👆 is your UPGRADE POINTS.\n👆 can be used to increase tanks basic characteristics like ⌛, 🎯, 🗡 and 🛡 by 1.\nYou will get 👆 by time go buy.\nDepending on your experience points and some actions your tanks are performing, 👆 will increase faster.',
      icon: '👆'
    }
  }
}

export default [
  {
    ...userTemplate,
    id: 1,
    name: 'Martin',
    color: 'green'
  },
  {
    ...userTemplate,
    id: 2,
    name: 'John',
    color: 'blue'
  },
  {
    ...userTemplate,
    id: 3,
    name: 'Bob',
    color: 'purple'
  },
  {
    ...userTemplate,
    id: 4,
    name: 'Emma',
    color: 'pink'
  }
]
