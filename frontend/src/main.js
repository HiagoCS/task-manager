import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Pages
import LoginComponent from './components/pages/login/LoginComponent.vue';

const routes = [
    {path:'/login', component:LoginComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

