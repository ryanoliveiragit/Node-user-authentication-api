//EXECUTAR
//npm run build
//node .\dist\index.js ou /npm run start

import express, { Request, Response, NextFunction } from 'express';
//importando a lib do express
//Request, Response e NextFunction é Typagens do Typescript

const app = express();
//configurando a aplicação

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'sucesso total tmj galeras' });
//toda vez que chegar um get no /status ele vai me responder 200
//com esse JSON 'BAR'

});

app.listen(3000, () => {
    //todas requisições que chegarem na porta 3000 vai ser resolvidas pelo APP
    console.log('Aplicação executando na porta 3000!')
});