import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.tsx')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.tsx')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router