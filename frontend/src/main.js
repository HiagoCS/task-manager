import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Pages
import Home from './components/pages/home/HomeComponent.vue';
import CreateUserComponent from './components/pages/user/createUser/CreateUserComponent.vue';
import ListUser from './components/pages/home/main-pages/listUsers/ListUserComponent.vue';

const routes = [
    {path:'/home', component:Home},
    {path:'/new-user', component:CreateUserComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).component('ListUser', ListUser).use(router).mount('#app')

