import express, { Express, Request, Response, Router } from "express";

const app: Express = express();
const route: Router = Router();
const port: number = 3000;

app.post("/loginAdm", (req: Request, res: Response) => {
  const email: string | undefined = req.get("email");
  const senha: string | undefined = req.get("senha");

  if (email && senha) {
    if (email === "admin@gmail.com" && senha === "123") {
      res.send({ msg: "Olá Administrador" });
    } else {
      res.send({ msg: "Você não acesso" });
    }
  } else {
    res.send({ msg: "Não foi possivel encontrar serviço" });
  }
});

app.listen(port, () => {
  console.log("Servidor Rodando!");
});
