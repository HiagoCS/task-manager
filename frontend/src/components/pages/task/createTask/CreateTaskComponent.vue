<template>
    <div class="main">
        <br>
        <h1 class="titulo">Nova Tarefa</h1>

        <div class="form">
            <div class="input-box">
                <span class="label">Titulo</span>
                <input type="text" id="title">
            </div>
            <div class="txtarea-box">
                <span class="label">Descrição</span>
                <textarea></textarea>
            </div>
            <div class="cb-box">
                <span class="label">Estado</span>
                <br>
                <div class="check-btn-box">
                    <button class="check-btn" value="pendente" @click="checked($event)">Pendente</button>
                    <button class="check-btn " value="emAndamento" @click="checked($event)">Em andamento</button>
                    <button class="check-btn " value="finalizado" @click="checked($event)">Finalizado</button>
                </div>
            </div>
            <div class="users-box" @click="showModal">
                <div class="main">
                    <text>+ Adicionar Usuário +</text>
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
                <ul class="user-list">
                    <li>Hiago Costa Santos</li>
                    <li>Guilherme Xaves</li>
                    <li>Paçoca MC</li>
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
    export default{
        methods:{
            showModal(){
                let modal = document.querySelector('.modal-container');

                modal.style.display = 'flex';
            },
            closeModal(){
                let modal = document.querySelector('.modal-container');

                modal.style.display = 'none';
            },
            async insert(){
                const response = await User.userInsert({'nome':document.querySelector("#name").value, 'senha':document.querySelector("#pass").value})
                if(response){
                    this.$swal('Sucesso', response.msg, response.status);
                    this.$router.push('/');
                }
                else{
                    this.$swal('Error', "ERR_BAD_RESPONSE", 'error');
                    
                }
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