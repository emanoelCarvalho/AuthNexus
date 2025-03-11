<template>
    <div class="container">
        <h1>Registro</h1>
        <input type="text" placeholder="Nome" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Senha" v-model="password">
        <button @click="doRegister">Registrar</button>
        <router-link to="/" class="link">Voltar</router-link>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        doRegister() {
            if (this.name && this.email && this.password) {
                alert('Registro simulado! Usuário: ' + this.name);
                this.$router.push('/home');
            } else {
                alert('Preencha todos os campos!');
            }
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
    margin-bottom: 20px;
}

input {
    width: 250px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
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

.link {
    display: block;
    margin-top: 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.link:hover {
    text-decoration: underline;
}
</style>