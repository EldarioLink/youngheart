import { createRouter, createWebHistory } from 'vue-router'

import { RouteNames } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.home,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/option',
      name: RouteNames.option,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/tourOption.vue')
    }
  ]
})

export default router
