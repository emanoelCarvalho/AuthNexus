<template>
  <div class="container">
      <h1>Bem-vindo, {{ name }} !</h1>
      <p>{{ message }}</p>
      <button @click="logout">Sair</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
      return {
          message: '', 
          name: ''
      };
  },
  created() {
      this.getProfile();
  },
  methods: {
      async getProfile() {
          try {
              const response = await axios.get('http://localhost:3000/auth/profile', {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('access_token')}`
                  }
              });
              this.message = response.data.message;
              this.name = localStorage.getItem('name');
          } catch (error) {
              console.error('Erro ao buscar perfil:', error);
              this.message = 'Erro ao carregar perfil';
          }
      },
      async logout() {
          try {
              await axios.post('http://localhost:3000/auth/logout', {
                  refresh_token: localStorage.getItem('refresh_token')
              });
              localStorage.removeItem('access_token');
              localStorage.removeItem('refresh_token');
              this.$router.push('/');
          } catch (error) {
              console.error('Erro ao fazer logout:', error);
          }
      },
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
  margin: 5px;
}

button:hover {
  background-color: #e0e0e0;
}
</style>