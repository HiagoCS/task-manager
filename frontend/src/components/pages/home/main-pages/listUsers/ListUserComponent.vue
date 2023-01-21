<template>
    <div class="main-component">
        <div :id="id" class="user-box" @click="showModal($event)">
            <img src="../../../../../assets/images/defaul-user.png" :id="id" @click="showModal($event)">
            
            <br>
            <div class="title">
                <text>{{ name }}</text>
            </div>
        </div>
    </div>
    <div class="modal-container" :id="id">
        <div class="modal" >
            <a class="close-modal" :id="id" @click="closeModal">X</a>
            <div class="modal-main">
                <img src="../../../../../assets/images/defaul-user.png" alt=""/>
                <text>{{name}}</text>
            </div>
            <br>
            <div class="modal-footer">
                <button :id="id" @click="deleteUser($event)">Excluir</button>
                <button :id="id">Exibir Tarefas</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
import User from '../../../../services/users';
    export default{
        name:'ListUser',
        props:['name', 'id'], 
        methods:{
            showModal(event){
                let modal = document.querySelectorAll(`.modal-container`)
                modal.forEach(item =>{
                    if(item.id == event.target.id)
                        return modal = item;
                })

                modal.style.display = 'flex';
            },
            closeModal(event){
                let modal = document.querySelectorAll(`.modal-container`)
                modal.forEach(item =>{
                    if(item.id == event.target.id)
                        return modal = item;
                })

                modal.style.display = 'none';
            },
            async deleteUser(event){
                const response = await User.userDelete(event.target.id);
                if(response){
                    this.$router.push('/');
                    document.location.reload();
                }
                else{

                }
                
            }
        }
    }
</script>