import { createRouter, createWebHistory } from 'vue-router'


import Login from './components/child-components/Login.vue'
import Sign from './components/child-components/SignUp.vue'
import LandingPage from './components/LandingPage.vue'
import Landing from './components/child-components/Landing.vue'
import Trading from './components/Trading.vue'
import Deposit from './components/child-components/Deposit.vue'
import MainApp from './components/child-components/MainApp.vue'
const routes = [ 
    {
        path: '/',
        component: LandingPage,
        children:[    
            {path: '', component: Landing},        
            {path: 'SignUp', component: Sign},
            {path: 'Login', component: Login}
        ]
    },
    {
        path: '/Trading',
        component: Trading,
        children:[
            {path: '', component: MainApp},
            {path: 'Deposit', component: Deposit}
        ]
    },  

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
