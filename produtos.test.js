const app = require("./index");
const request = require("supertest");

describe('GET /api/produtos', () => {
    it('retorna lista de produtos', async () => {
        const res = await request(app).get('/api/produtos');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('POST /api/produtos', () => {
    it('cria um produto', async () => {
        const res = await request(app).post('/api/produtos').send({
            nome: 'Produto Teste',
            preco: 99.99
        });
        expect(res.status).toBe(201);
        expect(res.body.nome).toBe('Produto Teste');
        expect(res.body.preco).toBe(99.99);
    });

    it('erro ao criar produto sem dados', async () => {
        const res = await request(app).post('/api/produtos').send({});
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('nome e preço devem ser informados');
    });
});

describe('PUT /api/produtos/:id', () => {
    it('atualiza um produto', async () => {
        const res = await request(app).put(`/api/produtos/12`).send({
            nome: 'Produto Atualizado',
            preco: 149.99
        });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('Produto Atualizado');
        expect(res.body.preco).toBe(149.99);
    });

    it('erro ao atualizar produto inexistente', async () => {
        const res = await request(app).put(`/api/produtos/9999`).send({
            nome: 'Produto Inexistente',
            preco: 0
        });
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('produto não encontrado');
    });
});

describe('DELETE /api/produtos/:id', () => {
    it('deleta um produto', async () => {
        const res = await request(app).delete(`/api/produtos/2`);
        expect(res.status).toBe(204);
    });

    it('erro ao deletar produto inexistente', async () => {
        const res = await request(app).delete(`/api/produtos/99999`);
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('produto não encontrado');
    });
});
