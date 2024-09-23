require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas = require('./rotas');
const rotas_autenticacao = require("./rotas_autentificacao")
const cookieParser = require('cookie-parser')
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
app.use(cookieParser())
app.use('/auth', rotas_autenticacao)

const swaggerDocument = YAML.load('./documentacao.yaml');

app.use('/api', rotas); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});

module.exports =app