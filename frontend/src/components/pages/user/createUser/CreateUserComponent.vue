<template>
    <div class="main">
        <br>
        <h1 class="titulo">Novo usuário</h1>

        <div class="form">
            <div class="input-box">
            <span class="label">Nome</span>
            <input type="text" id="name">
            </div>
            <div class="input-box">
                <span class="label">Senha</span>
                <input type="text" id="pass">
            </div>
            <button @click="insert()">Criar</button>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
    import User from '../../../services/users';
    export default{
        methods:{
            async insert(){
                const response = await User.userInsert({'nome':document.querySelector("#name").value, 'senha':document.querySelector("#pass").value})
                if(response){
                    this.$swal('Sucesso', response.msg, response.status);
                    this.$router.push('/');
                }
                else{
                    this.$swal('Error', "ERR_BAD_RESPONSE", 'error');
                    
                }
            }
        }
    }
</script>