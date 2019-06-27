import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter);

function checkAuth (to, from, next) {
  store.getters.isLoggedIn ? next() : next('/login')
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomePage'),
      // beforeEnter: checkAuth
    },
    {
      path: '/login',
      component: () => import('@/views/auth/Login.vue'),
      beforeEnter: (to, from, next) => !store.getters.isLoggedIn ? next() : next(from.path)
    },
    {
      path: '/signup',
      component: () => import('@/views/auth/SignUp'),
      beforeEnter: (to, from, next) => !store.getters.isLoggedIn ? next() : next(from.path)
    },
    {
      path: '/applications',
      component: () => import('@/views/Applications/Applications'),
    },
    {
      path: '/search',
      component: () => import('@/views/SearchResultPage'),
    },
    {
      path: '/roadmap/create',
      component: () => import('@/views/roadmap/create'),
      beforeEnter: checkAuth
    },
    {
      path: '/roadmapApplications.vue',
      component: () => import('@/views/roadmap/info'),
    },
    {
      path: '/user/:id',
      component: () => import('@/views/user/info'),
      beforeEnter: checkAuth
    }
  ]
})



