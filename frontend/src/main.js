import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
//Pages
import Home from './components/pages/home/HomeComponent.vue';
import CreateUserComponent from './components/pages/user/createUser/CreateUserComponent.vue';
import ListUser from './components/pages/home/main-pages/listUsers/ListUserComponent.vue';
import ListTask from './components/pages/home/main-pages/listTasks/ListTasksComponent.vue';
import AddUser from './components/pages/home/main-pages/addUser/AddUserComponent.vue';


const routes = [
    {path:'/', component:Home},
    {path:'/:option', component:Home},
    {path:'/new-user', component:CreateUserComponent}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).component('ListUser', ListUser).component('ListTask', ListTask).component('addUser', AddUser).use(router).use(VueSweetalert2).mount('#app');