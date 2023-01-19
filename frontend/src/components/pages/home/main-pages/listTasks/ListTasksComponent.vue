<template>
    <div class="main-component">
        <div class="task-box"  @click="showModal">
            <div class="task">
                <img src="../../../../../assets/images/defaul-user.png" alt="">
                <text>Titulo</text>
            </div>
            <div class="status">
                <text>Concluido</text>
            </div>
        </div>
    </div>
    <div class="modal-container">
        <div class="modal">
            <a class="close-modal" @click="closeModal">X</a>
            <div class="modal-main">
                <img src="../../../../../assets/images/defaul-user.png" alt=""/>
                <div class="task">
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas dignissim bibendum. Etiam sodales, purus in malesuada aliquam, quam risus varius leo, eu egestas nisl massa ac lectus. Etiam pellentesque, nulla nec tempus efficitur, justo nibh mattis turpis, eu maximus enim metus pellentesque lorem. Nam iaculis vulputate elementum. Fusce nec facilisis urna, quis aliquam lectus. Nunc vestibulum mi in quam auctor, vitae tristique ante fermentum. Pellentesque eget mauris quam.</text>
                    <text>Concluido</text>
                </div>
            </div>
            <br>
            <div class="modal-footer">
                <button>Excluir</button>
                <text>Concluido</text>
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