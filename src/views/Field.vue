<template>
  <b-container>
    <div class="keeper-range">
      <Keeper></Keeper>
    </div>
    <b-row class="fixed-bottom">
        <b-col>Score</b-col>
        <b-col>
          <Ball></Ball>
        </b-col>
        <b-col style="font-size: 0.5rem; color: Dodgerblue;">
          <b-row>
            <b-col></b-col>
            <b-col><i class="fas fa-caret-square-up fa-10x" v-on:click="directionAct('center')"></i></b-col>
            <b-col></b-col>
          </b-row>
          <b-row>
            <b-col md="3" offset-md="1"><i class="fas fa-caret-square-left fa-10x" v-on:click="directionAct('left')"></i></b-col>
            <b-col md="3" offset-md="3"><i class="fas fa-caret-square-right fa-10x" v-on:click="directionAct('right')"></i></b-col>
          </b-row>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Ball from '@/components/main-components/Ball.vue'
import Keeper from '@/components/main-components/Keeper.vue'

export default {
  name: 'mainPage',
  components: {
    Ball,
    Keeper
  },
  data () {
    return {
      players: {
        player_one: {
          name: 'Dian',
          role: 'keeper',
          score: 0,
          direction: null
        },
        player_two: {
          name: 'Roni',
          role: 'kicker',
          score: 0,
          direction: null
        }
      }
    }
  },
  methods: {
    directionAct (event) {
      // console.log(event)
      for(let key in this.players){
        if(this.players[key].role == 'keeper') {
          this.players[key].direction = event
        }
      }
      console.log(this)
    }
  }
}
</script>

<style scoped>
.keeper-range{
  padding-top: 80px
}
</style>
