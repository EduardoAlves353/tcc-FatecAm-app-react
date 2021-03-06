<p align="center">
<!-- <img width="300" alt="AdotaPET" src="" /> -->
</p>

<h1 align="center">AdotaPET do projeto TCC</h1>

<blockquote align="center">
:paw_prints: Poste para doar ou adotar PET!
</blockquote>

<p align="center">
  <!-- <img alt="GitHub language count" src="">

  <a href="">
    <img alt="Made by Léu Almeida" src="">
  </a> -->

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<!-- <p align="center">
<img alt="DevRadar Presentation" src="./presentation/presentation.png" />
</p> -->

## Introdução

[AdotaPET](https://github.com/EduardoAlves353/tcc-FatecAm-app-react) é um projeto fullstack criado para auxiliar as doações de animais. 
* No [backend](./backend) você pode usar nossa API Restful para gerenciar seu aplicativo.
* Na [versão frontend](./web) você pode criar e manter publicações dos Pets.
* No [mobile app](./mobile) você pode visualizar e entrar em contato para adotar os Pets.

Este projeto foi desenvolvido usando o Node.js para criar uma API Restful baseada no Express e é fornecido com o aplicativo ReactJS FrontEnd e o aplicativo móvel React Native usando o Expo Cli.

## Começo rápido

Primeiro, obtenha todos os requisitos instalados no seu sistema.

### :electric_plug: Pré-requisitos

- [Node.js LTS (>= 10.x)](https://nodejs.org/)
- [Yarn (>= 1.19)](https://yarnpkg.com/) or [NPM (>= 6.9)](https://www.npmjs.com/)

### Clonar o projeto completo

Prepare seu servidor de desenvolvimento para executar o AdotaPET.

```shell
# Antes de tudo, clone o projeto dentro de uma pasta que você criou, por exemplo "adotapet"
$ git clone https://github.com/EduardoAlves353/tcc-FatecAm-app-react.git
```

### :closed_lock_with_key: Introdução ao back-end da API Restful

Você precisará executar a API usando seu próprio [MongoDB Cluster](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/).

```shell
# Digite na pasta back-end 
$ cd backend

# Instale todas as dependências usando o Yarn
$ yarn

# Ou instale dependências usando o npm
$ npm install

# Copie a pasta .env
$ cp .env.example .env

# Insira seus ambientes
$ nano .env

# Output
MONGO_USERNAME=<Your Cluster Username>
MONGO_PASSWORD=<Your Cluster Password>
> Save and Exit (^+X && Y)

# Execute o servidor de desenvolvimento
$ yarn dev

# Caso a saída apareça assim, está tudo bem
yarn run v1.19.1
$ nodemon src/index.js
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`

# O back-end será executado na porta 3333
# https://localhost:3333
```

### :computer: Introdução à Web front-end

Este projeto está sendo executado com uma [API implementada](<!-- http://67.207.87.192:3335/devs -->), mas você pode usar a sua própria.

```shell
# Digite na pasta da web 
$ cd web

# Instale todas as dependências usando o Yarn
$ yarn

# Ou instale dependências usando o npm
$ npm install

# Insira seu URL da API
$ nano ./src/services/api.js

# URL de saída
baseURL: 'http://67.207.87.192:3333' # Você pode usar sua API ou este URL (backend implantado)

# Execute o servidor de desenvolvimento
$ yarn start

# O frontend começará na porta 3000
# https://localhost:3000
```

### :iphone: Introdução ao aplicativo móvel

Este projeto foi criado com a [Expo Cli](https://expo.io/learn).

```shell
# Digite na pasta do aplicativo
$ cd mobile

# Instale todas as dependências usando o Yarn
$ yarn

# Ou instale dependências usando o npm
$ npm install

# Insira seu URL da API
$ nano ./src/services/api.js

# URL de saída
baseURL: 'http://67.207.87.192:3335' # You can use your API or this url (deployed backend)

# Execute o servidor de desenvolvimento
$ yarn start

# A exposição começará na porta 19002
# https://localhost:19002
```
<!-- 
## :copyright: License

MIT License.

Consulte [LICENSE.md](LICENSE.md) para obter detalhes.

Design de logotipo feito por []()

<hr/> -->