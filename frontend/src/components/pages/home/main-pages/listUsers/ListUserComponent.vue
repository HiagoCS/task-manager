<template>
    <div class="main-component">
        <div class="user-box" @click="showModal">
            <img src="../../../../../assets/images/defaul-user.png" alt="">
            <br>
            <div class="status">
                <text style="color:red">Pendente: 0</text>
                <text style="color:blue">Em Execução: 0</text>
                <text style="color:green">Finalizada: 0</text>
            </div>
        </div>
    </div>
    <div class="modal-container">
        <div class="modal" >
            <a class="close-modal" @click="closeModal">X</a>
            <div class="modal-main">
                <img src="../../../../../assets/images/defaul-user.png" alt=""/>
                <div class="status">
                    <text style="color:red">Pendente: 0</text>
                    <text style="color:blue">Em Execução: 0</text>
                    <text style="color:green">Finalizada: 0</text>
                </div>
            </div>
            <br>
            <div class="modal-footer">
                <button>Excluir</button>
                <button>Exibir Tarefas</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
    export default{
        name:'Modal',
        methods:{
            showModal(){
                let modal = document.querySelector('.modal-container');

                modal.style.display = 'flex';
            },
            closeModal(){
                let modal = document.querySelector('.modal-container');

                modal.style.display = 'none';
            }
        }
    }
</script>