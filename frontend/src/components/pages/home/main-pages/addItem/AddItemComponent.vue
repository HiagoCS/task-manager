<template>
    <div class="main-component" @click="this.$router.push(`${name}`)">
        <div class="user-box">
            <text>+</text>
        </div>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
    export default{
        props:['name']
    }
</script>