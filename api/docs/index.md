
---

# Como Rodar a API

Este arquivo descreve o passo a passo para rodar a API de autenticação em seu ambiente local, usando **Docker** e as tecnologias envolvidas. Siga as etapas abaixo para configurar e executar a aplicação.

## Tecnologias Necessárias

Antes de seguir com a execução da aplicação, é necessário ter as seguintes tecnologias instaladas no seu ambiente:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

Além disso, você pode conferir as tecnologias utilizadas neste projeto no arquivo [TECNOLOGIAS.md](./TECNOLOGIAS.md).

---

## Passos para Rodar a Aplicação

### 1. **Clonar o Repositório**

Primeiro, faça o clone do repositório em sua máquina local:

```bash
git clone https://github.com/emanoelCarvalho/api-auth.git
```

### 2. **Configurar as Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias para o funcionamento da aplicação. O conteúdo do arquivo `.env` deve ser similar ao seguinte:

```plaintext
PORT=3000
JWT_SECRET=seu_token_secreto
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_banco
```

**Importante**: Não se esqueça de substituir as variáveis, como `seu_token_secreto`, `seu_usuario`, `sua_senha` e `nome_do_banco`, com os valores corretos.

### 3. **Criar o Contêiner com Docker**

Para rodar a aplicação com o banco de dados PostgreSQL usando Docker, execute o seguinte comando para iniciar o contêiner:

```bash
docker-compose up -d
```

Esse comando irá:

- Baixar a imagem do **PostgreSQL** do Docker Hub.
- Criar e rodar o contêiner do PostgreSQL.
- Garantir que o banco de dados esteja configurado e pronto para ser usado.

### 4. **Instalar as Dependências**

Após configurar as variáveis de ambiente e iniciar o banco de dados com o Docker, instale as dependências do projeto:

```bash
npm install
```

### 5. **Iniciar o Servidor**

Com as dependências instaladas e o banco de dados rodando no contêiner Docker, inicie o servidor com o seguinte comando:

```bash
npm run start:dev
```

O servidor estará rodando na URL:

```
http://localhost:3000
```

### 6. **Testar os Endpoints da API**

Após iniciar o servidor, você pode testar os endpoints da API usando ferramentas como **Insomnia**, **Postman** ou **cURL**. Abaixo estão os principais endpoints disponíveis:

- **POST /auth/signin**: Realiza o login e retorna um **JWT** para autenticação futura.
- **GET /auth/profile**: Obtém o perfil do usuário autenticado.
- **POST /users**: Cria um novo usuário.

Para testar os endpoints, siga estas instruções:
- **Para fazer um cadastro**
    - Método: `POST`
     - URL: `http://localhost:3000/users`
  - Corpo da requisição (exemplo em JSON):

    ```json
    {
      "name": "usario",
      "email": "usuario@exemplo.com",
      "password": "senha_do_usuario"
    }
  - **Resposta Esperada**:
    ```json
    {
      "id": 1,
      "email": "usuario@exemplo.com",
      "name": "Nome do Usuário"
    }
- **Para fazer o login** (no Postman ou Insomnia):

  - Método: `POST`
  - URL: `http://localhost:3000/auth/signin`
  - Corpo da requisição (exemplo em JSON):
    ```json
    {
      "email": "usuario@exemplo.com",
      "password": "senha_do_usuario"
    }
    ```

  - **Resposta Esperada**:
    ```json
    {
      "access_token": "token_gerado"
    }
    ```

- **Para acessar o perfil do usuário** (usando o JWT):

  - Método: `GET`
  - URL: `http://localhost:3000/auth/profile`
  - Cabeçalho da requisição:
    - `Authorization: Bearer <JWT>`
  
  - **Resposta Esperada**:
    ```json
    {
      "id": 1,
      "email": "usuario@exemplo.com",
      "name": "Nome do Usuário"
    }
    ```

### 7. **Finalizando**

Agora, a API está rodando e pronta para ser utilizada. Você pode fazer requisições para os endpoints da API usando qualquer ferramenta de sua escolha.

---

## Observações Importantes

- **Docker**: O comando `docker-compose up -d` irá baixar a imagem do PostgreSQL do Docker Hub e iniciar o banco de dados. Caso você já tenha a imagem localmente, o comando utilizará a versão mais recente disponível.
- **JWT**: Certifique-se de passar o token gerado no cabeçalho `Authorization: Bearer <JWT>` nas rotas que requerem autenticação, como a rota `/auth/profile`.

---

Se precisar de mais ajuda ou encontrar algum problema, consulte os logs ou entre em contato!

---