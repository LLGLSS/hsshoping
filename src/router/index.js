import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Category from '../views/Category.vue'
import Me from '../views/Me.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Me',
    name: 'Me',
    component: Me
  }
]

const router = new VueRouter({
  routes
})

export default router
