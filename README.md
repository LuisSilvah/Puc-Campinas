# Servidor exemplo de backend com TypeScript

Este é um projeto apenas de "esqueleto" para você criar seu backend em TypeScript. 

## Instalando as dependências

Ao fazer o clone do repositório, basta rodar o comando: 

```
npm install
```
O comando acima instalará todas as dependências que constam no arquivo package.json.

## Iniciando o servidor

Para garantir que seu código esteja funcionando, na raíz do projeto rode o comando: 

```
npm run build
```
Como consequência, será gerado o diretório build constando o arquivo server.js. 

Acesse o diretório onde está o arquivo server.js (build/src) e digite o comando
```
node server.js
```

Voilà!

## Desafio

Numa requisição http existem verbos estes verbos são muitos porém os mais comuns
são (GET, PUT, POST, DELETE).

Na requisição http informamos tanto o verbo quanto os parâmetros que o serviço deve receber, os parâmetros
se dividem em dois tipos:

Parâmetros de cabeçalho (Headers)
Parâmetros no corpo da requisição (body)

Quando vamos usar um serviço que não precisa receber um parâmetro de dado sensivel como senha podemos enviar o parâmetro no corpo da requisição,
Porém quando precisamos enviar um dado sensivel fazemos isso como header

## Tarefa

Chamar os dois serviços passando um raio dinâmico tanto no Header tanto no Body

Aprender a invocar o serviço CURL
