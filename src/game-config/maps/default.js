const baseTale = {
  id: null,
  baseType: 'baseTale',
  item: null,
  backgroundColor: 'yellow'
}
const respondSpot = {
  id: null,
  baseType: 'respondSpot',
  item: null,
  backgroundColor: 'yellow'
}
const hole = {
  id: null,
  baseType: 'hole',
  item: null,
  backgroundColor: 'orange'
}
const wall = {
  id: null,
  baseType: 'wall',
  item: null,
  backgroundColor: 'black'
}

export const shopItems = [
  {
    label: '💣',
    baseType: 'ammo'
  },
  {
    label: '🛢',
    baseType: 'fuel',
    subBaseType: 'single'
  },
  {
    label: '🛢🛢',
    baseType: 'fuel',
    subBaseType: 'double'
  },
  {
    label: '2💰',
    baseType: 'money',
    subBaseType: 'two'
  },
  {
    label: '5💰',
    baseType: 'money',
    subBaseType: 'five'
  },
  {
    label: '10💰',
    baseType: 'money',
    subBaseType: 'ten'
  }
]

export const getShopItem = (type) => {
  switch (type) {
    case 'ammo':
      return { ...shopItems[0] }
    case 'fuelSingle':
      return { ...shopItems[1] }
    case 'fuelDouble':
      return { ...shopItems[2] }
    case 'moneyTwo':
      return { ...shopItems[3] }
    case 'moneyFive':
      return { ...shopItems[4] }
    case 'moneyTen':
      return { ...shopItems[5] }
  }
}

export const getBase = () => {
  return { ...baseTale }
}

export const getResp = () => {
  return { ...respondSpot }
}

export const getHole = () => {
  return { ...hole }
}

export const getWall = () => {
  return { ...wall }
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const defaultMapConfig = []
let idIncrementor = 1

export const generate = () => {
  for (let i = 0; i <= 19; i++) {
    defaultMapConfig[i] = []
    for (let j = 0; j <= 19; j++) {
      if (Math.random() > 0.91) {
        defaultMapConfig[i][j] = getHole()
      } else if (Math.random() > 0.73) {
        defaultMapConfig[i][j] = getWall()
      } else {
        defaultMapConfig[i][j] = getBase()
      }
      defaultMapConfig[i][j].id = idIncrementor
      idIncrementor++
    }
  }
  for (let i = 0; i < 4; i++) {
    defaultMapConfig[getRandomInt(1, 19)][getRandomInt(1, 19)] = getResp()
  }
  for (let i = 0; i < 45; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('moneyTwo')
    }
  }
  for (let i = 0; i < 15; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('moneyFive')
    }
  }
  for (let i = 0; i < 4; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('moneyTen')
    }
  }
  for (let i = 0; i < 10; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('ammo')
    }
  }
  for (let i = 0; i < 25; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('fuelSingle')
    }
  }
  for (let i = 0; i < 10; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('fuelDouble')
    }
  }
}

generate()

export default defaultMapConfig
