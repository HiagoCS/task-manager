import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Pages
import Home from './components/pages/home/HomeComponent.vue';
import CreateUserComponent from './components/pages/user/createUser/CreateUserComponent.vue';
import ListUser from './components/pages/home/main-pages/listUsers/ListUserComponent.vue';
import ListTask from './components/pages/home/main-pages/listTasks/ListTasksComponent.vue';


const routes = [
    {path:'/home/:option', component:Home},
    {path:'/new-user', component:CreateUserComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).component('ListUser', ListUser).component('ListTask', ListTask).use(router).mount('#app')

