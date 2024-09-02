const app = require("./index");
const request = require("supertest");

describe('GET /api/produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/api/produtos');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('POST /api/produtos', () => {
    it('criar produto com sucesso', async () => {
        const res = await request(app).post('/api/produtos').send({
            nome: 'Produto Teste',
            preco: 99.99
        });
        expect(res.status).toBe(201);
        expect(res.body.nome).toBe('Produto Teste');
        expect(res.body.preco).toBe(99.99);
    });

    it('retornar erro 400 ao criar produto com dados inválidos', async () => {
        const res = await request(app).post('/api/produtos').send({});
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Nome e preço devem ser informados');
    });
});

describe('PUT /api/produtos/:id', () => {
    it('atualizar produto com sucesso', async () => {
        const produtoId = 12; 
        const res = await request(app).put(`/api/produtos/${produtoId}`).send({
            nome: 'Produto Atualizado',
            preco: 149.99
        });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('Produto Atualizado');
        expect(res.body.preco).toBe(149.99);
    });

    it('retornar 404 se o produto não for encontrado', async () => {
        const produtoId = 9999; 
        const res = await request(app).put(`/api/produtos/${produtoId}`).send({
            nome: 'Produto Inexistente',
            preco: 0
        });
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Produto não encontrado');
    });
});

describe('DELETE /api/produtos/:id', () => {
    it('deletar produto com sucesso', async () => {
        const produtoId = 12; 
        const res = await request(app).delete(`/api/produtos/${produtoId}`);
        expect(res.status).toBe(204);
    });

    it('retornar 404 se o produto não for encontrado', async () => {
        const produtoId = 9999; 
        const res = await request(app).delete(`/api/produtos/${produtoId}`);
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Produto não encontrado');
    });
});
