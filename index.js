const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas = require('./rotas');

app.use(bodyParser.json());

app.use('/api', rotas); 

// app.listen(8000, () => {
//     console.log('Servidor rodando na porta 8000');
// });

module.exports =app