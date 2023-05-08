import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ContactView from './views/ContactView.vue'
import ItemsView from './views/ItemsView.vue'
import CartView from './views/CartView.vue'
import UserView from './views/UserView.vue'
import LoginView from './views/LoginView.vue'
import CreateAccount from './views/CreateAccountView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: ItemsView,
      path: '/houseplans'
    },
    {
      component: CartView,
      path: '/cart'
    },
    {
      component: UserView,
      path: '/profile'
    },
    {
      component: LoginView,
      path: '/login'
    },
    {
      component: CreateAccount,
      path: '/create'
    }
  ]
})
