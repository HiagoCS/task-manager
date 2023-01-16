import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Pages
import CreateUserComponent from './components/pages/user/createUser/CreateUserComponent.vue';

const routes = [
    {path:'/new-user', component:CreateUserComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

