import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Data from '../pages/Data.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
  { path: '/data', component: Data }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
