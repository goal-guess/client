import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Login.vue'
import GameOn from './views/GameOn.vue'
import Rooms from './views/Rooms.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/rooms/:id',
      name: 'gameOn',
      component: GameOn
    }
  ]
})
