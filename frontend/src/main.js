import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
//Pages
import Home from './components/pages/home/HomeComponent.vue';
import CreateUser from './components/pages/user/createUser/CreateUserComponent.vue';
import CreateTask from './components/pages/task/CreateTask/CreateTaskComponent.vue';
import ListUser from './components/pages/home/main-pages/listUsers/ListUserComponent.vue';
import ListTask from './components/pages/home/main-pages/listTasks/ListTasksComponent.vue';
import AddItem from './components/pages/home/main-pages/addItem/AddItemComponent.vue';


const routes = [
    {path:'/', component:Home},
    {path:'/:option', component:Home},
    {path:'/new-user', component:CreateUser},
    {path:'/new-task', component:CreateTask}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).component('ListUser', ListUser).component('ListTask', ListTask).component('AddItem', AddItem).use(router).use(VueSweetalert2).mount('#app');