import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Pages
import Home from './components/pages/home/HomeComponent.vue';
import CreateUserComponent from './components/pages/user/createUser/CreateUserComponent.vue';

const routes = [
    {path:'/home', component:Home},
    {path:'/new-user', component:CreateUserComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

