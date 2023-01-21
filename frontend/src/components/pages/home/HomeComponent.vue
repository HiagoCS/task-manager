<template>
    <main>
        <div class="main">
            <ListUser v-if="$route.params.option === 'user'" v-for="user in users" :key="user.id" :name="user.nome" :id="user.id"></ListUser>
            <ListTask v-if="$route.params.option === 'task'" v-for="task in tasks" :key="task.id"
                :id="task.id"
                :titulo="task.titulo"
                :descricao="task.descricao"
                :estado="task.estado"
                ></ListTask>
            <AddItem :name="'/new-'+$route.params.option"></AddItem>

          </div>
        <div class="header">
            <div class="logo">
                <h1>taskManager</h1>
            </div>
            <div class="nav-link">
                <div class="link">
                    <a href="/user" class="title">Usuários</a>
                </div>
                <div class="link">
                    <a href="/task" class="title">Tarefas</a>
                </div>
                <div class="link">
                    <a class="title">Ajuda</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import User from '../../services/users';
import Task from '../../services/tasks';
  export default{
    data(){
      return{
        users:[],
        tasks:[]
      }
    },
    async mounted(){
      const pathname = new URL(location.href).pathname
      if(pathname === '/' || pathname === '/user'){
        User.index().then(({data}) =>{
          if(data.length > 0){
             this.users = data;
             this.$router.push('/user');
          }
          else if(data.length == 0){
            this.$router.push('/new-user');
          }
        });
      }
      else{
        Task.index().then(resp =>{
          if(resp.length > 0){
            console.log(this.tasks);
             this.tasks = resp;
             this.$router.push('/task');
          }
          else if(resp.length == 0){
            this.$router.push('/new-task');
          }
        })
      }
    }
    }
</script>
<style lang="scss" src="./style.scss" scoped></style>