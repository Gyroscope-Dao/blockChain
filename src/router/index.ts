import { createWebHistory, createRouter } from 'vue-router'

const Login = () => import('@/views/account/Login.vue')
const Register = () => import('@/views/account/Register.vue')
const Home = () => import('@/views/home/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
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
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
})

export default router
