
---

# Tecnologias Utilizadas

Neste projeto, utilizamos uma combinação de ferramentas e bibliotecas para construir uma API robusta e escalável. Abaixo estão as principais tecnologias utilizadas:

## NestJS

- **NestJS** é um framework para o desenvolvimento de aplicações modernas e escaláveis. Ele fornece uma arquitetura limpa, baseada em módulos, controladores e serviços, o que facilita a criação de APIs com boa organização e manutenção. Utilizamos o NestJS para estruturar a API de forma eficiente, aproveitando seus recursos como injeção de dependências e modularização.

## TypeORM

- **TypeORM** é um ORM (Object Relational Mapping) que permite trabalhar com uma variedade de bancos de dados relacionais de maneira simplificada. Usamos o TypeORM para interagir com o banco de dados PostgreSQL, definindo entidades e realizando operações como inserção, atualização e exclusão de dados de maneira intuitiva e com segurança.

## PostgreSQL

- **PostgreSQL** é um banco de dados relacional poderoso e de código aberto. No projeto, o PostgreSQL é utilizado para armazenar as informações dos usuários, incluindo credenciais, e garantir que os dados sejam persistentes de maneira segura e eficiente. Ele foi escolhido por ser altamente confiável e por oferecer funcionalidades robustas, como transações e integridade referencial.

## Passport-JWT

- **Passport-JWT** é um middleware de autenticação baseado em JWT (JSON Web Tokens). Utilizamos o Passport-JWT para proteger as rotas da API e garantir que apenas usuários autenticados possam acessar determinadas funcionalidades. O JWT é gerado no momento do login e utilizado para autenticar as requisições subsequentes.

## Docker

- **Docker** é utilizado para containerizar a aplicação e facilitar a sua execução em diferentes ambientes, garantindo que o projeto tenha o mesmo comportamento em todas as máquinas. Usamos o Docker para criar um ambiente isolado, permitindo que a API e o banco de dados PostgreSQL sejam executados em contêineres de forma simples e eficiente. Isso facilita o desenvolvimento, testes e implantação, além de garantir a consistência do ambiente.

---
