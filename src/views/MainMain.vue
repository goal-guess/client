<template>
  <div>
    <button @click.prevent="addKeeper">add keeper</button>
    <button @click.prevent="addKicker">add kicker</button>
    <br><br>
    <button @click.prevent="checkPlayers">check player</button>
    <br><br>
    <button @click.prevent="removePlayers">remove</button>
    <br><br>
    <button @click.prevent="checkDir">check dir</button>
    <br><br>
    <button @click.prevent="checkWhoScores">check score</button>
    
  </div>
</template>

<script>
import { roomOne, roomTwo, roomThree } from '../helpers/firebase'
import game from '../helpers/game'
import { functions } from 'firebase';

export default {
  data () {
    return {
      data: null
    }
  },

  methods: {
    addKeeper () {
      let player_one = {
        role: 'keeper',
        score: 0,
        name: 'John'
      }
      roomThree.child('player_one').set(player_one)
        .then(() => console.log('player one saved'))
        .catch(err => console.log(err))
    },

    addKicker () {
      let player_two = {
        role: 'kicker',
        score: 0,
        name: 'Doe'
      }
      roomThree.child('player_two').set(player_two)
        .then(() => console.log('player two saved'))
        .catch(err => console.log(err))
    },

    removePlayers () {
      roomThree.remove()
    },

    checkPlayers () {
      game.checkPlayersReady(this.data)
        .then(result => console.log(result))
        .catch(err => console.log(err.message))
    },

    checkDir () {
      game.checkDirection(this.data)
        .then(result => {
          Object.keys(result).forEach(key => {
            console.log(key, result[key].directionStat)
          })
        })
    },

    checkWhoScores () {
      game.checkWhoScores(this.data)
        .then(result => {
          let player_one = result.player_one
          let player_two = result.player_two
          let updates = {}
          updates[`/player_one`] = player_one
          updates[`/player_two`] = player_two
          roomThree.update(updates)
            .then(() => {})
        })
    },

    checkWhoWins () {

    }
  },

  created () {
    let self = this
    roomThree.on('value', function (snapshot) {
      let key = snapshot.key
      let val = snapshot.val()
      console.log('on value')
      self.data = val
      console.log(snapshot.val());
    }) 
  }
}
</script>

<style>

</style>
