import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
