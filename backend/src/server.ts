import express from 'express'; // O EXPRESS AJUDA VOCÊ A CONFIGURAR ROTAS DA APLICAÇÃO. QUE O USER TIVER REQUISITANDO (REQ) A PAGE DE CONATATOS, EU VOU RESPONDER (RES) COM A LISTA DE CONTATO
import 'express-async-errors';
import path from 'path';
import cors from 'cors';


import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);
// Rota (ENDPOINT) = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação
// POST = Criando uma informação nova
// PUT = Editar uma informação
// DELETE = Deletando uma informação 

// Paginação, Filter e etc
// Query params: http://localhost:3333/users?search=diego...
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)



app.listen(3333); // localhost:3333

// Driver nativo, Query builder, ORM

// Driver nativo: É escrever nossa query da maneira que aprendi -> "Select * From"...
// Query builder: 'KNEXJS' Escrever query usando JS como por exemplo -> "knex('users').select('*').where('name', 'Miguel')"..
// ORM (Object Relational Mapping): Classe que simbolisa uma tabela no banco de dados, se tiver 3 users, automáticamente eu vou ter 3 objetos de USER 
// Object Relational Mapping é uma forma de eu relacionar  objetos e classes com a nossas tabelas no banco de dados.


