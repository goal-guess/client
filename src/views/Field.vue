<template>
  <b-container>
    <div class="keeper-range">
      <Keeper :direction="findKeeper"></Keeper>
    </div>

    <b-row class="fixed-bottom">
        <b-col>
          <div class="score-board">
            <h2>Score :</h2> <br />
            <h3>{{ timer }}</h3> <br>
            <h5>{{me.name}} as {{me.role}} : {{me.score}}</h5> <br />
            <h5>{{you.name}} as {{you.name}} : {{you.score}}</h5>
            <h5 v-if="winner"> Winner : {{winner.name}}</h5>
          </div>
        </b-col>
        <b-col>
          <Ball :direction="findKicker"></Ball>
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
import { functions } from 'firebase';


export default {
  name: 'mainPage',
  components: {
    Ball,
    Keeper
  },
  data () {
    return {
      mePlayer: '',
      me:{},
      youPlayer: '',
      you:{},
      timer: 10,
      winner: null
    }
  },

  computed: {
    findKeeper () {
      if (this.me.role === 'keeper') {
        return this.me.directionState
      } else {
        return this.you.directionState
      }
    },

    findKicker () {
      if (this.me.role === 'kicker') {
        return this.me.directionState
      } else {
        return this.you.directionState
      }
    }
  },

  methods: {
    directionAct (event) {
      let room = this.checkRoom()

      this.me.directionState = event
      room
        .child(this.mePlayer)
        .set(this.me)
        .then( () => {
          console.log('success')
        })

      // this.me.directionState = event
      console.log(this.me)
    },
    checkRoom () {
      switch(this.$route.params.id) {
        case 'one': return roomOne
        case 'two': return roomTwo
        case 'three': return roomThree
      }
    },
    checkDir (players) {
      let room = this.checkRoom()
      const self= this
      game.checkDirection(players)
        .then(result => {
          room.child(this.mePlayer).set(this.me)
          room.child(this.youPlayer).set(this.you)
          return game.checkWhoScores(players)
          
        })
        .then(result => {
          room.child(this.mePlayer).set(this.me)
          room.child(this.youPlayer).set(this.you)
          return game.checkWhoWins(players)
        })
        .then(winner => {
          this.winner = winner
          if (winner){
            swal({
              title: `The winner is ${winner.name}`,
              text: `${this.me.name} pulang kau!`,
              type: 'warning',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Exit!'
            })
            .then(function(result){
              console.log(result,"====")
              self.winner
              localStorage.clear()
              room.remove()
              self.$router.push("/")

            })
          } else {
            self.timer = 10
            self.gameStart()
          }
        })

    },

    gameStart () {
      let self = this
      let interval = setInterval(function() {
        self.timer--
        console.log('belom masuk', self.timer)
        if (self.timer === 0) {
          console.log('masuk interval 0')
          let players = {}
          players[self.mePlayer] = self.me
          players[self.youPlayer] = self.you
          self.checkDir(players)
          clearInterval(interval)

          if(!this.winner){
            // location.reload()
          }
        }
      }, 1000)
    }
  },
  mounted: function(){
    this.gameStart()
  },
  created () {
    this.mePlayer = localStorage.getItem('player')
    let room = this.checkRoom()

    let self = this
    room.on('value', function (snapshot) {
      snapshot.forEach( player => {
        if(self.mePlayer == player.key) {
          self.me = player.val()
        } else {
          self.youPlayer = player.key
          self.you = player.val()
        }
      })
      // console.log('winner oint:', self.winner)
      // if (self.winner){
      //   self.$router.push('/')
      //   localStorage.clear()
      // }
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
