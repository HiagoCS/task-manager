<template>
    <div class="main-component">
        <div :id="id" class="task-box" @click="showModal($event)">
            <div class="task">
                <img src="../../../../../assets/images/defaul-user.png" :id="id" @click="showModal($event)">
                <text>{{titulo}}</text>
            </div>
            <div class="status">
                <text>{{ estado }}</text>
            </div>
        </div>
    </div>
    <div class="modal-container" :id="id">
        <div class="modal">
            <a class="close-modal" :id="id" @click="closeModal($event)">X</a>
            <div class="modal-main">
                <img src="../../../../../assets/images/defaul-user.png" alt=""/>
                <div class="task">
                    <text>{{ descricao }}</text>
                </div>
            </div>
            <br>
            <div class="modal-footer" @click="updateStatus($event)">
                <button  :id="id" @click="deleteTask($event)">Excluir</button>
                <div class="status-box" @click="checked($event)">
                    <text class="status " id="Pendente">Pendente</text>
                    <text class="status " id="EmAndamento">Em Andamento</text>
                    <text class="status " id="Finalizado">Finalizado</text>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
import Task from '../../../../services/tasks';
    export default{
        name:'ListTask',
        props:['id', 'titulo', 'descricao', 'estado', 'user_id'],
        mounted(){
            let estado = this.estado;
            if(this.estado.includes(" "))
                estado = this.estado.replace(/\s/g, '');

            let status = document.querySelector(`#${estado}`);
            let others = document.querySelectorAll(".status");
                others.forEach(item =>{
                    if(item.classList.contains("active"))
                        item.classList.remove("active");
                       
                });
                status.classList.add("active");
        },
        methods:{
            showModal(event){
                let modal = document.querySelectorAll(`.modal-container`)
                modal.forEach(item =>{
                    if(item.id == event.target.id)
                        return modal = item;
                });

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
            async deleteTask(event){
                const response = await Task.taskDelete(event.target.id);
                if(response){
                    this.$router.push('/');
                    document.location.reload();
                }
            },
            async updateStatus(event){
                const response = await Task.taskUpdate(this.id, event.target.id);
                if(response){
                    this.$router.push('/task');
                    document.location.reload();
                }
            },
            checked(event){
                let others = document.querySelectorAll(".status");
                others.forEach(item =>{
                    if(item.classList.contains("active"))
                        item.classList.remove("active");
                       
                });
                event.target.classList.add("active");
            }
        }
    }
</script>