import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Main from "../views/Main.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: "main",
          component: Main
        }
      ]
        
      
    }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    ,{
      path: "/login",
      name: 'login',
      component: Login
    },{
      path: "/main",
      name: 'main',
      component: Main
    },
  ]
})

export default router
