import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Pages
import LoginComponent from './components/pages/login/LoginComponent.vue';
import RegisterComponent from './components/pages/register/RegisterComponent.vue';

const routes = [
    {path:'/login', component:LoginComponent},
    {path:'/register', component:RegisterComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

