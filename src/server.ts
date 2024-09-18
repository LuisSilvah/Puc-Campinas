/*
    Servidor simples
    usando o http sem express.
*/
import http from "http";

const port = 3000;
const PI: number = 3.1415;

// Criar duas funções: uma calculadora a área do circulo
// A = π r²

// Outra: Comprimento da circunferencia

function calcAreaCirculo(raio: number): number {


    return PI * (raio*raio);
}

function calcCompCircunferencia (raio: number): number {
    return 2 * PI * raio
}

const server = http.createServer((req, res) => {


    if (req.url === "/calc/area/circulo") {
        res.writeHead(200, { 'Content-type': 'text/plan' })
        const areaCirculo: number = calcAreaCirculo(30)
        res.end("Área do circulo: " + areaCirculo)
    } else if (req.url === "/calc/comp/circunferencia") {
        res.writeHead(200, { 'Content-type': 'text/plan' })

        const compCircunferencia: number = calcCompCircunferencia(30)
        res.end(`Comprimento da Circunferencia: ${compCircunferencia}`)
    } else if (req.url === "/teste" ){
        res.writeHead(200, { 'Content-type': 'application/json' })
        // const resJson: {teste: string} = {teste: "teste"}
        // res.end(JSON.stringify(resJson))
        
        const areaCirculo: number = calcAreaCirculo(30)

        res.end(String(areaCirculo))
    }
    else {
        res.writeHead(400, { 'Content-type': 'application/json' })
        res.end("SERVIÇO INEXISTENTE")
    }

});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});