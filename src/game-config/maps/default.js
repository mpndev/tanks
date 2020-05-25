const baseTale = { id: null, baseType: 'baseTale', item: null, backgroundColor: 'yellow' }
const respondSpot = { id: null, baseType: 'respondSpot', item: null, backgroundColor: 'yellow' }
const hole = { id: null, baseType: 'hole', item: null, backgroundColor: 'orange' }
const wall = { id: null, baseType: 'wall', item: null, backgroundColor: 'black' }

export const shopItems = [
  {
    label: '&#128163;',
    baseType: 'ammo'
  },
  {
    label: '&#128738;&#128738;',
    baseType: 'fuel'
  },
  {
    label: '5&#128176;',
    baseType: 'money'
  }
]

export const getShopItem = (type) => {
  switch (type) {
    case 'ammo':
      return { ...shopItems[0] }
    case 'fuel':
      return { ...shopItems[1] }
    case 'money':
      return { ...shopItems[2] }
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
      if (Math.random() > 0.96) {
        defaultMapConfig[i][j] = getHole()
      } else if (Math.random() > 0.78) {
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
  for (let i = 0; i < 20; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('money')
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
  for (let i = 0; i < 15; i++) {
    const x = getRandomInt(1, 19)
    const y = getRandomInt(1, 19)
    if (defaultMapConfig[x][y].baseType !== 'baseTale') {
      i--
    } else {
      defaultMapConfig[x][y].item = getShopItem('fuel')
    }
  }
}

generate()

export default defaultMapConfig
