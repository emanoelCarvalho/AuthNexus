<template>
    <div class="container">
        <h1>Registro</h1>
        <input type="text" placeholder="Nome" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Senha" v-model="password">
        <button @click="doRegister">Registrar</button>
        <router-link to="/" class="link">Voltar</router-link>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errorMessage: '',
            successMessage: ''
        };
    },
    methods: {
        async doRegister() {
            if (!this.name || !this.email || !this.password) {
                this.errorMessage = 'Preencha todos os campos!';
                return;
            }

            try {
                const response = await axios.post('http://localhost:3000/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                this.successMessage = 'Registro bem-sucedido! Redirecionando...';
                setTimeout(() => {
                    this.$router.push('/home');
                }, 2000);
            } catch (error) {
                this.errorMessage = 'Erro ao registrar. Tente novamente.';
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

.error {
    color: red;
    margin-top: 10px;
}

.success {
    color: lightgreen;
    margin-top: 10px;
}
</style>
