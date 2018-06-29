import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Main from './views/Field.vue'
import MainMain from './views/MainMain.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/rooms/:id',
      name: 'main',
      component: Main
    },
    {
      path: '/dummy',
      name: 'MainMain',
      component: MainMain
    }
  ]
})
