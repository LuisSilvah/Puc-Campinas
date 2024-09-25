import express, { Express, Router, Request, Response } from "express";

const app: Express = express();
const route: Router = Router();
const port: number = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "Retorna" });
});

app.post("/loginAdm", (req: Request, res: Response) => {

    const email = req.get('email')
    const senha = req.get('senha')

  if (email && senha) {
    if (email === "admin@gmail.com" && senha === "123") {
      res.send({ msg: "Ola Administrador" });
    } else {
      res.send({ msg: "Você não possui Acesso", header: req });
    }
  } else {
    res.send({ msg: "Faltando Parametros da requisição", header: req.get('email') });
  }
});

app.put("/signUp", (req: Request, res: Response) => {
  res.send("Cadastro Realizado");
});

app.listen(port, () => {
  console.log("Servidor rodando:", port);
});
