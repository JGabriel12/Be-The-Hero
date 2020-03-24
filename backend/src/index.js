const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)

/* 
    Métodos HTTP:

    GET: Buscar/listar uma informação do backend
    POST: Criar uma informação no backend
    PUT: Alterar uma informação no backend
    DELETE: Deletar uma informação no bakcend
*/

/*
    Tipos de parâmetros:

    Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
    Route Params: Parâmetros utilizados para indentificar recursos
    Request Body: Corpo da requisisão, utilizado para criar ou alterar recursos
*/