const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

router.get('/produtos', controlador.listProdutos);               
router.get('/produtos/:id', controlador.getProduto);             
router.post('/produtos', controlador.createProduto);           
router.put('/produtos/:id', controlador.updateProduto);         
router.delete('/produtos/:id', controlador.deleteProduto);      

router.get('/clientes', controlador.listClientes);              
router.get('/clientes/:id', controlador.getCliente);             
router.post('/clientes', controlador.createCliente);            
router.put('/clientes/:id', controlador.updateCliente);         
router.delete('/clientes/:id', controlador.deleteCliente);      

module.exports = router;
