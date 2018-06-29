import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winner:null
  },
  mutations: {
    SET_WINNER(state, payload) {
      state.winner = payload
    }
  },
  actions: {
    setWinner({ commit }, payload) {
      commit('SET_WINNER', payload)
    }
  }
})
