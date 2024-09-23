// const db = require('./db.json');
// const fs = require('fs');
// const bcryptjs = require('bcryptjs')

// const listProdutos = async (req, res) => {
//     res.json(db.produtos);
// };

// const getProduto = async (req, res) => {
//     const _id = parseInt(req.params.id, 10);
//     const produto = db.produtos.find(produto => produto.id === _id);
//     produto ? res.json(produto) : res.status(404).json({ error: 'produto não encontrado' });
// };

// const createProduto = async (req, res) => {
//     const dados = req.body;
//     if (!dados.nome || !dados.preco) {
//         return res.status(400).json({ error: 'nome e preço devem ser informados' });
//     }

//     const _id = db.produtos.length ? Math.max(...db.produtos.map(p => p.id)) + 1 : 1;
//     dados.id = _id;
//     db.produtos.push(dados);

//     fs.writeFile('./db.json', JSON.stringify(db, null, 2), err => {
//         if (err) {
//             return res.status(500).json({ error: 'erro no servidor' });
//         }
//         res.status(201).json(dados);
//     });
// };

// const updateProduto = async (req, res) => {
//     const _id = parseInt(req.params.id, 10);
//     const novosDados = req.body;
//     const produtoIndex = db.produtos.findIndex(produto => produto.id === _id);

//     if (produtoIndex === -1) {
//         return res.status(404).json({ error: 'produto não encontrado' });
//     }

//     const produto = db.produtos[produtoIndex];
//     for (const chave in novosDados) {
//         if (produto.hasOwnProperty(chave)) {
//             produto[chave] = novosDados[chave];
//         } else {
//             console.log(`a chave ${chave} não existe no produto.`);
//         }
//     }

//     fs.writeFile('./db.json', JSON.stringify(db, null, 2), err => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro no servidor' });
//         }
//         res.json(produto);
//     });
// };

// const deleteProduto = async (req, res) => {
//     const _id = parseInt(req.params.id, 10);
//     const produtoIndex = db.produtos.findIndex(produto => produto.id === _id);

//     if (produtoIndex === -1) {
//         return res.status(404).json({ error: 'produto não encontrado' });
//     }

//     db.produtos.splice(produtoIndex, 1);

//     fs.writeFile('./db.json', JSON.stringify(db, null, 2), err => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro no servidor' });
//         }
//         res.status(204).send();
//     });
// };

// const listClientes = async (req, res) => {
//     res.json(db.clientes);
// };

// const getCliente = async (req, res) => {
//     const _id = parseInt(req.params.id, 10);
//     const cliente = db.clientes.find(cliente => cliente.id === _id);
//     cliente ? res.json(cliente) : res.status(404).json({ error: 'Cliente não encontrado' });
// };

// const createCliente = async (req, res) => {
//     const dados = req.body;
//     if (!dados.nome || !dados.email || !dados.senha) {
//         return res.status(400).json({ error: 'Nome, email e senha devem ser informados' });
//     }

//     const _id = db.clientes.length ? Math.max(...db.clientes.map(c => c.id)) + 1 : 1;
//     dados.id = _id;
//     db.clientes.push(dados);

//     fs.writeFile('./db.json', JSON.stringify(db, null, 2), err => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro no servidor' });
//         }
//         res.status(201).json(dados);
//     });
// };

// const updateCliente = async (req, res) => {
//     const _id = parseInt(req.params.id, 10);
//     const novosDados = req.body;
//     const clienteIndex = db.clientes.findIndex(cliente => cliente.id === _id);

//     if (clienteIndex === -1) {
//         return res.status(404).json({ error: 'Cliente não encontrado' });
//     }

//     const cliente = db.clientes[clienteIndex];
//     for (const chave in novosDados) {
//         if (cliente.hasOwnProperty(chave)) {
//             cliente[chave] = novosDados[chave];
//         } else {
//             console.log(`A chave ${chave} não existe no cliente.`);
//         }
//     }

//     fs.writeFile('./db.json', JSON.stringify(db, null, 2), err => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro no servidor' });
//         }
//         res.json(cliente);
//     });
// };

// const deleteCliente = async (req, res) => {
//     const _id = parseInt(req.params.id, 10);
//     const clienteIndex = db.clientes.findIndex(cliente => cliente.id === _id);

//     if (clienteIndex === -1) {
//         return res.status(404).json({ error: 'Cliente não encontrado' });
//     }

//     db.clientes.splice(clienteIndex, 1);

//     fs.writeFile('./db.json', JSON.stringify(db, null, 2), err => {
//         if (err) {
//             return res.status(500).json({ error: 'Erro no servidor' });
//         }
//         res.status(204).send();
//     });
// };

// module.exports = {
//     listProdutos, getProduto, createProduto, updateProduto, deleteProduto,
//     listClientes, getCliente, createCliente, updateCliente, deleteCliente
// };
