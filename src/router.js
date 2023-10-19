import { createRouter, createWebHistory } from 'vue-router'


import Login from './components/Login.vue'
import Sign from './components/SignUp.vue'
import LandingPage from './components/LandingPage.vue'
import Trading from './components/Trading.vue'
import Deposit from './components/Deposit.vue'
const routes = [
   
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/SignUp',
        component: Sign
    },
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/Trading',
        component: Trading,
        children:[
            {path: '', component: Trading},
            {path: 'Deposit', component: Deposit}
        ]
    },  
    


]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
