# RepositoriosIoasys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Deploy da aplicação (Vercel)

Aplicação rodando em produção:

[https://repositorios-ioasys.vercel.app/login](https://repositorios-ioasys.vercel.app/login)

## O que foi desenvolvido

Uma aplicação Angular que realiza uma autenticação.

E lista os meus repósitórios do gitHub, utilizando a API do GitHub.


De acordo com os dados consumidos pela API:

https://api.github.com/users/joifogaca/repos

#### Login

Para logar na aplicação, utilize o acesso abaixo:

```
email: admin@email.com

senha: 123456
```

## Setup do projeto

```gh repo clone joifogaca/repositorios-ioasys

cd repositorios-ioasys

npm install 
```


### Como rodar o projeto

Rode`ng serve` para rodar em ambiente de desenvolvimento. Acesse a URL `http://localhost:4200/`.

#### Com docker 

Na raiz do projeto, realizar o build:

`docker build -t angular-repositorios-ioasys . `

Rodar a aplicação:

`docker run -p 4200:4200 angular-repositorios-ioasys `







## Dependências e Versões Necessárias

Os frameworks utilizados na aplicação foram:

[PrimeNg](https://primeng.org/)

[PrimeFlex](https://primeflex.org/)

[Prime Icons](https://primeng.org/icons)

### Links Utéis 

[Configurando ESLint e Prettier no Angular:](https://medium.com/@leogouveia/configurando-eslint-e-prettier-no-angular-guia-pr%C3%A1tico-para-aprimorar-a-qualidade-do-c%C3%B3digo-3f0827017c4a#:~:text=Este%20comando%20vai%20realizar%20as%20seguintes%20a%C3%A7%C3%B5es%3A%201,as%20configura%C3%A7%C3%B5es%20de%20lint%20para%20o%20Angular%20CLI.)

