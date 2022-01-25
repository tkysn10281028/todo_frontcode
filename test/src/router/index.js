import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  // },
  // {
  //   path: '/signup/activate',
  //   name: 'Activate',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Activate.vue')
  // },
  // {
  //   path: '/todo/undone',
  //   name: 'Undone',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Undone.vue')
  // },
  // {
  //   path: '/todo/done',
  //   name: 'Done',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Done.vue')
  // },
  // {
  //   path: '/logout',
  //   name: 'Logout',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue')
  // },


]

const router = new VueRouter({
  routes
})

export default router
