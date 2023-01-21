<template>
    <main>
        <div class="main">
            <ListTask v-if="$route.params.option === 'tasks'"></ListTask>
            <ListUser v-if="$route.params.option === 'users'" v-for="user in users" :key="user.id" :name="user.nome" :id="user.id"></ListUser>
            <addUser></addUser>
          </div>
        <div class="header">
            <div class="logo">
                <h1>taskManager</h1>
            </div>
            <div class="nav-link">
                <div class="link">
                    <a href="/users" class="title">Usuários</a>
                </div>
                <div class="link">
                    <a href="/tasks" class="title">Tarefas</a>
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
  export default{
    data(){
      return{
        users:[],
        status:[]
      }
    },
    async mounted(){
      const pathname = new URL(location.href).pathname
      if(pathname === '/' || pathname === '/users'){
        User.index().then(({data}) =>{
          if(data.length > 0){
             this.users = data;
             this.$router.push('/users');
          }
          else if(data.length == 0){
            this.$router.push('/new-user');
          }
        })
      }
    }
  }
</script>
<style lang="scss" src="./style.scss" scoped></style>