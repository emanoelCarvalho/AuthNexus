<template>
    <div class="container">
        <h1>Login</h1>
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Senha" v-model="password">
        <button @click="doLogin">Entrar</button>
        <router-link to="/" class="link">Voltar</router-link>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async doLogin() {
            if (!this.email || !this.password) {
                this.errorMessage = 'Preencha todos os campos!';
                return;
            }

            try {
                const response = await axios.post('http://localhost:3000/auth/signin', {
                    email: this.email,
                    password: this.password
                });

                console.log(response.data);
                // Simulação de armazenamento do token e redirecionamento
                localStorage.setItem('token', response.data.token);
                console.log(localStorage.getItem('token'));
                this.$router.push('/home');
            } catch (error) {
                this.errorMessage = 'Falha no login. Verifique suas credenciais.';
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
</style>
