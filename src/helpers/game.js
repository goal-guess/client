// import { roomOne, roomTwo, roomThree } from './firebase'

export default {
  async checkPlayersReady (players) {
    let keeper = 0
    let kicker = 0
    if (!players) {
      throw new Error('no player found')
    }

    Object.keys(players).forEach(key => {
      console.log(players[key].role)
      if (players[key].role === 'keeper') {
        keeper++
      } else if (players[key].role === 'kicker') {
        kicker++
      }
    })

    return kicker === 1 && keeper === 1
  },

  async checkDirection (players) {
    Object.keys(players).forEach(key => {
      let dir = players[key].directionStat
      if (!dir) {
        players[key].directionStat = 'center'
      }
    })

    return players
  },

  async checkWhoScores (players) {
    let keeperDir, 
        kickerDir

    Object.keys(players).forEach(key => {
      let role = players[key].role
      let dir = players[key].directionStat
      if (role === 'keeper') {
        keeperDir = dir
      } else {
        kickerDir = dir
      }
    })

    console.log(keeperDir, kickerDir)

    Object.keys(players).forEach(key => {
      let keeperWin = keeperDir === kickerDir
      let role = players[key].role

      if (keeperWin && role === 'keeper') {
        players[key].score++
      } else if (!keeperWin && role === 'kicker') {
        players[key].score++
      }
    })

    console.log(players.player_one.score)
    console.log(players.player_two.score)
    return players
  },

  async checkWhoWins (players) {
    Object.keys(players).forEach(key => {
      
    })
  }
}