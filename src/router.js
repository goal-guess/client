import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Field.vue'
import Home from './views/Login.vue'
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
      component: Main
    }
  ]
})
