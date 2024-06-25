<p align="center">
  <img src="https://github.com/Carolinatxrs/task-api/assets/70086416/decaa83a-4131-4069-8eee-0b20f9af514a" alt="node.js" style="width: 10%;" />
</p>

## Task API

> *[Desafio](https://efficient-sloth-d85.notion.site/Desafio-02-be7cdb37aaf74ba898bc6336427fa410) referente ao módulo: Criando APIs RESTfull com Node.js | Rocketseat*

### Projeto

- Uma API para controle de dieta diária, a Daily Diet API. Sendo possível criar um usuário, ciar, visualizar, editar e remover uma refeição, visualizar todas as refeições de um usuário e suas métricas.

#### Setup
- Clonar o repositório
- Instalar dependências
  ~~~
  npm install
  ~~~
- Copiar o arquivo .env.example
  ~~~
  cp .env.example .env
  ~~~
- Executar a aplicação
  ~~~
  npm run dev
  ~~~
  
##### Requisitos Funcionais:
- [x] Deve ser possível criar um usuário;
- [x] Deve ser possível listar usuários;
- [x] Deve ser possível visualizar um usuários;
- [x] O usuário deve poder criar uma refeição;
- [x] O usuário deve poder listar todas as suas refeições;
- [x] O usuário deve poder visualizar uma refeição que ele criou;
- [x] O usuário deve poder editar uma refeição criada por ele;
- [x] O usuário deve poder deletar uma refeição que ele criou;
- [x] O usuário deve poder ver as métricas: o total de refeições registradas, total dentro da sua dieta, total fora da dieta e a melhor sequencia de refeições dentro da dieta.


##### Regras de negócios:
- [x] Deve ser possível editar todos os dados de uma refeição;
- [x] Deve ser possível identificarmos o usuário entre as requisições.
- [x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou.


#### Rotas HTTP

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=daily-diet-api&uri=https%3A%2F%2Fgithub.com%2FCarolinatxrs%2Fdaily-diet-api%2Fblob%2Fmain%2Frequests.json)

<br />
<br />
