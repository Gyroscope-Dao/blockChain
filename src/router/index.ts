import { createWebHistory, createRouter } from 'vue-router'

const Login = () => import('@/views/account/Login.vue')
const Register = () => import('@/views/account/Register.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
})

export default router
