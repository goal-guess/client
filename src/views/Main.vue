<template>
  <b-container>
    <div class="keeper-range">
      <Keeper></Keeper>
    </div>
    <b-row align-v="end">
        <b-col>Score</b-col>
        <b-col>
          <Ball></Ball>
        </b-col>
        <b-col style="font-size: 0.5rem; color: Dodgerblue;">
          <b-row>
            <b-col></b-col>
            <b-col><i class="fas fa-caret-square-up fa-10x"></i></b-col>
            <b-col></b-col>
          </b-row>
          <b-row>
            <b-col md="3" offset-md="1"><i class="fas fa-caret-square-left fa-10x"></i></b-col>
            <b-col md="3" offset-md="3"><i class="fas fa-caret-square-right fa-10x"></i></b-col>
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
  }
}
</script>

<style scoped>
.keeper-range{
  padding-top: 80px
}
</style>
