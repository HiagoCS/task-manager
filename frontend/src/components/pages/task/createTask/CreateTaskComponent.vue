<template>
    <div class="main">
        <br>
        <h1 class="titulo">Nova Tarefa:</h1>

        <div class="form">
            <div class="input-box">
                <span class="label">Titulo</span>
                <input type="text" id="title">
            </div>
            <div class="txtarea-box">
                <span class="label">Descrição</span>
                <textarea id="description"></textarea>
            </div>
            <div class="cb-box">
                <span class="label">Estado</span>
                <br>
                <div class="check-btn-box">
                    <button class="check-btn" value="Pendente" @click="checked($event)">Pendente</button>
                    <button class="check-btn" value="Em Andamento" @click="checked($event)">Em andamento</button>
                    <button class="check-btn" value="Finalizado" @click="checked($event)">Finalizado</button>
                </div>
            </div>
            <div class="users-box" @click="showModal">
                <div class="main">
                    <text id="user-title">+ Adicionar Usuário +</text>
                </div>
            </div>
            <button id="submit" @click="insert()">Criar</button>
        </div>
    </div>
    <div class="modal-container">
        <div class="modal">
            <a class="close-modal" @click="closeModal">X</a>
            <div class="modal-header">
                <input type="text" placeholder="Nome de usuário">
            </div>
            <br>
            <div class="modal-main">
                <ul class="user-list" v-for="user in userList" :key="user.id" >
                    <li :id="user.id" @click="saveUser($event)">{{user.nome}}</li>
                </ul>
            </div>
            <br>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
    import User from '../../../services/users';
    import Task from '../../../services/tasks';
    export default{
        computed:{
            getValue(){
                return this.userList;
            }
        },
        data:() => {
                return{
                    "userList":[],
                    "userSelected":[]
                }
             },
        methods:{
            async insert(){
                console.log(document.querySelector('#title').value);
                const response = await Task.taskInsert(
                    {'titulo':document.querySelector("#title").value, 
                    'descricao':document.querySelector("#description").value,
                    'estado':document.querySelector('.check-btn').value,
                    'user_id':parseInt(this.userSelected.id)});
                console.log(response);
                if(response){
                    this.$swal('Sucesso', response.msg, response.status);
                    this.$router.push('/task');
                }
                else{
                    this.$swal('Error', "ERR_BAD_RESPONSE", 'error');
                    
                }
            },
            saveUser(event){
                console.log("Save");
                this.userSelected = {
                    id:event.target.id,
                    nome:event.target.innerHTML
                }
                const box = document.querySelector("#user-title");
                box.innerHTML = `<div value="${this.userSelected.id}" id='user-title'><img src='../../../../assets/images/defaul-user.png'><text>${this.userSelected.nome}<text/></div>`;
                this.closeModal();
            },
            showModal(){
                let modal = document.querySelector('.modal-container');

                modal.style.display = 'flex';
                User.index()
                    .then(response =>{
                        this.userList = response.data;
                    }).catch(err =>console.log(err));
            },
            closeModal(){
                let modal = document.querySelector('.modal-container');

                modal.style.display = 'none';
            },
            checked(event){
                let others = document.querySelectorAll(".check-btn");
                others.forEach(item =>{
                    if(item.classList.contains("checked"))
                        item.classList.remove("checked");
                });
                event.target.classList.add("checked");
            }
        }
    }
</script>