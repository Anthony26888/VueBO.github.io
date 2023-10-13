import { createRouter, createWebHistory } from 'vue-router'


import Login from './components/Login.vue'
import Sign from './components/SignUp.vue'


const routes = [
   
    {
        path: '/',
        component: Login
    },
    {
        path: '/SignUp',
        component: Sign
    },
 
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
