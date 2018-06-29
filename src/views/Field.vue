<template>
  <b-container>
    <div class="keeper-range">
      <Keeper></Keeper>
    </div>
    <b-row class="fixed-bottom">
        <b-col>
          <div class="score-board">
            <h2>Score :</h2> <br />
            <h5>John(Keeper) : 0</h5> <br />
            <h5>Doe(Kicker) : 0</h5>
          </div>
        </b-col>
        <b-col>
          <Ball></Ball>
        </b-col>
        <b-col style="font-size: 0.5rem; color: Dodgerblue;">
          <div>
            <b-row>
              <b-col></b-col>
              <b-col><i class="fas fa-caret-square-up fa-10x" v-on:click="directionAct('center')"></i></b-col>
              <b-col></b-col>
            </b-row>
            <b-row>
              <b-col md="3" offset-md="1"><i class="fas fa-caret-square-left fa-10x" v-on:click="directionAct('left')"></i></b-col>
              <b-col md="3" offset-md="3"><i class="fas fa-caret-square-right fa-10x" v-on:click="directionAct('right')"></i></b-col>
            </b-row>
          </div>          
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Ball from '@/components/main-components/Ball.vue'
import Keeper from '@/components/main-components/Keeper.vue'
import { roomOne, roomTwo, roomThree } from '../helpers/firebase'
import game from '../helpers/game'

export default {
  name: 'mainPage',
  components: {
    Ball,
    Keeper
  },
  data () {
    return {
      player_one : {

      }
    }
  },
  methods: {
    directionAct (event) {
      
    },
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
            if (result[key].role === 'kicker') {
              this.kickerDir = result[key].directionStat  
            } else {
              this.keeperDir = result[key].directionStat
            }
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

    },
    checkRoom () {
      switch(this.$route.params.id) {
        case '1': return 'roomOne'
        case '2': return 'roomTwo'
        case '3': return 'roomThree'
      }
    }
  },
  created () {
    let room = this.checkRoom()
    // console.log(room)
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

<style scoped>
.keeper-range{
  padding-top: 80px
}
.score-board{
  padding: 1rem;
  background-color: #3B653D;
  color: #FFFFFF;
  border-color: 5px solid #D1A665;
}
</style>
