<template>
    <div class="container">
        <h1>Bem-vindo ao SimpliAuth</h1>
        <p>Uma forma simples de gerenciar seu acesso.</p>
        <router-link to="/login" class="btn">Login</router-link>
        <router-link to="/register" class="btn">Registrar</router-link>
    </div>
</template>

<script>
export default {
    name: 'LandingPage'
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
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    margin: 10px;
    padding: 12px 24px;
    background: white;
    color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover {
    background: #e0e0e0;
}
</style>
