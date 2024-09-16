const express = require('express')
const router = express.Router()
const controlador = require('.controlador_autenticacao')

router.post('/login', controlador_autentificacao.login)
router.post('/logout', controlador_autentificacao.logout)

module.exports = router;