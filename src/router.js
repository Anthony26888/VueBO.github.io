import { createRouter, createWebHistory } from 'vue-router'


import Login from './login/App.vue'
import Home from './main/App.vue'


const routes = [
   
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Home',
        component: Home
    },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
