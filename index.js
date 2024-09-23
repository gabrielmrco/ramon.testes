require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas = require('./rotas');
const rotas_autenticacao = require(".rotas_autenticacao")
const cookieParser = require('cookie-parser')

app.use(bodyParser.json());
app.use(cookieParser())
app.use('/auth', rotas_autenticacao)

app.use('/api', rotas); 

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});

module.exports =app