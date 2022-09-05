//importando o Express Router
import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
import statusRoute from './status.route';

const usersRoute = Router();
//basicamente ta transformando o Router em uma variavel

//pesquisar todos os ID
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
//toda vez q chegar um GET = Buscar um recurso no caso /users
    const users = [{ userName: 'Ryan' }];
    //aqui tem um array com os nomes

    res.status(StatusCodes.OK).send({users});
    //entao toda vez que chegar uma requisição /status com status 200 ( que é OK )
    //vai me retornar minha lista de nomes
});

//Pesquisar um ID especifico
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

//Adicionar um ID
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body
    console.log(req.body)
    res.status(StatusCodes.CREATED).send(newUser);
});

//Modificar um ID
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send({modifiedUser});
});

//deletar um ID
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});


export default usersRoute;
//exportando padrão pra usar esse 'script' no index principal.
