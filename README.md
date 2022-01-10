# VNT Auth Template

Este projeto é um template de autenticação para ser utilizado como ponto de partida para aplicações web. Ele é composto de um servidor implementado em nodeJS e Type ORM. 

Faz parte do projeto um exemplo de front-end desenvolvido em Vue.js, mas que pode ser facilmente substiutuído pelo frameworjk de sua preferência. Escrevi em Vue.js porque é o framework que gosto mais e conheço melhor.

A sigla VNT vem das inicias de Vue.JS, Node.Js e TypeORM

## Pré Requisitos

Para utiliziar este template você precisará ter instalados em seu ambiente de desenvolvimento:

- **Docker**
- **Node JS**
- Se você utiliza o Windows: **Git Bash** ou outro shell de sua preferência (CmDer, Powershell, etc.)

Opcionalmente pode instalar também o Yarn caso prefira este no lugar do NPM.

## Características

* Autenticação de usuários utilizando tokens JWS;
* Bancos de dados separados para autenticação (usuários) e aplicação
* Possibilidade de usar MySQL e/ou PostgreSQL ou ambos ao mesmo tempo separando os bancos de dados de autenticação e da aplicação.

## Instalação

Depois de clonar o repositório siga os passos abaixo para completar a instalação do template:

1. Usando o shell de sua preferência (para quem está usando o Windows recomendo o Git Bash) entrar na pasta do projeto e executar os comandos:

 ```
   npm install
 ```
2. Entrar na pasta server e instalar os pacote digitando os comandos abaixo:
```
   cd server
   npm install
```
3. Renomear o arquivo src\config\**settings.example.ts** para src\config\**settings.ts**
4. Renomear o arquivo _volumes\scripts\**script-mysql.samp.sql** para _volumes\scripts\**script-mysql.sql**
5. Gerar uma chave de autenticação executando comando:
```
   npm run generate
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).