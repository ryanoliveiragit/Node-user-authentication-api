import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
//importando a lib do express
//Request, Response e NextFunction é Typagens do Typescript

//usersRoute são as rotas /users /etc..
import usersRoute from './routes/users.route';

//configurando a aplicação
const app = express();

//pra ele entender que é string na url ( sempre adicionar essas linhas )
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //confg padrão.
app.use(statusRoute);


//aqui ele vai executar o script q ta dentro de users.route.ts
app.use(usersRoute);

//toda vez que chegar um get no /status ele vai me responder 200
//com esse JSON 'BAR'
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'sucesso total tmj galeras' });

});

//todas requisições que chegarem na porta 3000 vai ser resolvidas pelo APP
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});