
<template>
    <main>
        <div class="main">
            <ListTask v-if="$route.params.option === 'tasks'"></ListTask>
            <ListUser v-if="$route.params.option === 'users'"></ListUser>
        </div>
        <div class="header">
            <div class="logo">
                <h1>taskManager</h1>
            </div>
            <div class="nav-link">
                <div class="link">
                    <a href="/home/users" class="title">Usuários</a>
                </div>
                <div class="link">
                    <a href="/home/tasks" class="title">Tarefas</a>
                </div>
                <div class="link">
                    <a class="title">Ajuda</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
</script>
<style lang="scss" src="./style.scss" scoped></style>