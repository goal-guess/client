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
import { roomOne, roomTwo, roomThree } from '../helpers/firebase'
import game from '../helpers/game'

export default {
  name: 'mainPage',
  components: {
    Ball,
    Keeper
  },
  methods: {
  }
}
</script>

<style scoped>
.keeper-range{
  padding-top: 80px
}
.score-board{
  margin: 1rem;
  padding: 1rem;
  background-color: #3B653D;
  color: #FFFFFF;
  border-color: 5px solid #D1A665;
}
</style>
