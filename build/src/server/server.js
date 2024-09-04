"use strict";
/*

    Este arquivo em type é o ponto de entrada do backend.

    Isso significa que:

    - Um Backend precisa inicializar um servidor web
    - Aceitar requisições http
    - Devolver respostas http
    - Ter rotas de serviços

    Para nós, inicializar, um serviços é uma rota (endereco)
    Ex: /cacularSeno

    Todo serviço recebe uma requisição http, processa o que vem nela e PODE ou NÃO devolver uma resposta.


    O Servidor WEB opera no protocolo HTTP.

    O protocolo HTTP (protocolo de aplicações) funciona com partes básicas (Requisição: O que chega no serviço)
    VERBO | MODO de operação (Como os dados vão carregados na requisição e por fim, a RESPOSTA)
    
    Quando criamos um servidor ele já disponibiliza uma
    PORTA DEFAULT (rota Padrão) que não tem nome,
    é representada por / (barra web)

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
function rotaDefault(requisição, resposta) {
    resposta.writeHead(200, { 'Content-type': 'text/plain' });
    resposta.end("Hello World");
}
const server = node_http_1.default.createServer(rotaDefault);
// Chamar a função de listen (colocar no ar) do servidor
// listen significa que o servidor vai "escutar" requisições
// numa determinada porta.
server.listen(3000, () => {
    console.log("Sevidor funcionando 3000");
});
