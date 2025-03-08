
---

# API de Autenticação

Este repositório contém uma API autenticação de usuários, desenvolvida com o objetivo de compreender e aprimorar conceitos relacionados ao desenvolvimento backend, especialmente na parte de autenticação e segurança de usuários.

## Funcionalidades

A API oferece as seguintes funcionalidades principais:

- **Cadastro de usuário**
- **Login de usuário**
- **Autenticação baseada em JWT (JSON Web Tokens)**
- **Validação de token**
- **Logout**

Essas funcionalidades são implementadas para permitir o gerenciamento seguro de usuários, com foco em boas práticas de autenticação e autorização.

## Tecnologias Utilizadas

Para compreender melhor as ferramentas e tecnologias utilizadas neste projeto, consulte o arquivo [TECNOLOGIAS.md](./TECNOLOGIAS.md), onde são descritas as tecnologias e ferramentas adotadas, como **NestJS**, **TypeORM**, **PostgreSQL**, **Passport-JWT** e **Docker**.

## Como Executar

### Pré-requisitos

Antes de rodar a aplicação, você precisará ter as seguintes tecnologias instaladas:

- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

### Passos para Rodar a API

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

1. **Clonar o repositório:**

   Primeiramente, faça o clone do repositório:

   ```bash
   git clone https://github.com/emanoelCarvalho/api-auth.git
   ```

2. **Instalar dependências:**

   Navegue até o diretório do projeto e instale as dependências:

   ```bash
   cd api-auth
   npm install
   ```

3. **Configurar variáveis de ambiente:**

   Antes de rodar a aplicação, crie o arquivo `.env` na raiz do projeto e configure as variáveis de ambiente. Para detalhes sobre as variáveis necessárias, consulte a seção de **configuração** no arquivo [techs.md](./docs/techs.md.md).

4. **Criar o contêiner do banco de dados com Docker**:

   Caso você esteja utilizando **Docker** para rodar o banco de dados, execute o seguinte comando para iniciar o contêiner do **PostgreSQL**:

   ```bash
   docker-compose up -d
   ```

   Isso irá configurar e rodar o banco de dados PostgreSQL no Docker, garantindo que a aplicação possa se conectar ao banco de dados.

5. **Iniciar o servidor**:

   Para rodar o servidor, execute o comando:

   ```bash
   npm run start:dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

### Testando a API

Para testar os endpoints da API, você pode usar ferramentas como **Insomnia**, **Postman** ou **cURL**. Para obter mais detalhes sobre os **endpoints** disponíveis, consulte o arquivo [index.md](./docs/index.md), que descreve como fazer as requisições e quais dados são necessários para cada endpoint.

## **Licença**

Este projeto é licenciado sob a Licença MIT. Isso significa que você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que mantenha o aviso de copyright e a licença.

Para mais detalhes, consulte o arquivo `LICENSE` no repositório.

## Contribuições

Sinta-se à vontade para contribuir com este projeto. Se você encontrar melhorias ou bugs, ou se tiver ideias para novas funcionalidades, crie uma **issue** ou envie um **pull request**.

## Contato

Caso tenha dúvidas ou queira discutir mais sobre o projeto, fique à vontade para me contatar através das redes sociais ou e-mail:

- [LinkedIn](https://www.linkedin.com/in/emanoelcarvalho/)
- [GitHub](https://www.github.com/emanoelCarvalho/)
- E-mail: [hemanoel718@gmail.com](mailto:hemanoel718@gmail.com)

---
