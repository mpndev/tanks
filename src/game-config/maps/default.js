const baseTale = { id: null, baseType: 'baseTale', item: null, backgroundColor: 'yellow' }
const respondSpot = { id: null, baseType: 'respondSpot', item: null, backgroundColor: 'yellow' }
const hole = { id: null, baseType: 'hole', item: null, backgroundColor: 'orange' }
const wall = { id: null, baseType: 'wall', item: null, backgroundColor: 'black' }

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
}

generate()

export default defaultMapConfig
