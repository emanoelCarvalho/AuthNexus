
---

# Endpoints da API

Esta API possui os seguintes endpoints. A URL base para todas as rotas é `http://localhost:3000`.

## Como Checar os Endpoints Usando Swagger

A aplicação está configurada para expor uma documentação interativa dos endpoints utilizando o Swagger. Isso permite que você visualize, teste e entenda melhor os endpoints disponíveis.

### Acessando a Documentação Swagger

1. **Inicie o servidor da aplicação:**
   Execute o seguinte comando no terminal:
   ```bash
   npm run start:dev
   ```

2. **Acesse o Swagger no navegador:**
   Abra o navegador e vá até:
   ```
   http://localhost:3000/api
   ```

3. **Explore os endpoints:**
   Na interface Swagger:
   - Você verá uma lista categorizada de endpoints.
   - Clique em um endpoint para visualizar detalhes como parâmetros, exemplos de requisição e respostas.
   - Utilize o botão "Try it out" para testar os endpoints diretamente na interface.

### Exemplo de Endpoint no Swagger

- **Categoria:** `Users`
- **Endpoint:** `POST /users`
- **Descrição:** Cria um novo usuário no sistema.

---