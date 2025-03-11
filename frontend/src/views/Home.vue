<template>
    <div class="container">
        <h1>Bem-vindo, {{ user.name }}!</h1>
        <p>Você está logado no aplicativo.</p>
        <button @click="logout">Sair</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            user: {
                name: 'Usuário'
            }
        };
    },
    methods: {
        logout() {
            alert('Logout simulado!');
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #007bff, #6610f2);
    color: white;
    text-align: center;
}

h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

button {
    padding: 12px 20px;
    background-color: white;
    color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

button:hover {
    background-color: #e0e0e0;
}
</style>