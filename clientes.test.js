const app = require("./index");
const request = require("supertest");

describe('GET /api/clientes', () => {
    it('retorna lista de clientes', async () => {
        const res = await request(app).get('/api/clientes').send();
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('retorna cliente específico', async () => {
        const clienteId = 6;
        const res = await request(app).get(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(200);
        expect(res.body.id).toBe(clienteId);
    });

    it('erro ao buscar cliente inexistente', async () => {
        const clienteId = 9999654656;
        const res = await request(app).get(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Cliente não encontrado');
    });
});

describe('POST /api/clientes', () => {
    it('cria um cliente', async () => {
        const res = await request(app).post('/api/clientes').send({
            nome: 'Novo Cliente',
            email: 'novo.cliente@example.com',
            senha: 'senha123'
        });
        expect(res.status).toBe(201);
        expect(res.body.nome).toBe('Novo Cliente');
        expect(res.body.email).toBe('novo.cliente@example.com');
    });
});

describe('PUT /api/clientes/:id', () => {
    it('atualiza um cliente', async () => {
        const clienteId = 4;
        const res = await request(app).put(`/api/clientes/${clienteId}`).send({
            nome: 'Gabriel Atualizado',
            email: 'atualizado@xte.com',
            senha: 'NovaSenha123'
        });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('Gabriel Atualizado');
        expect(res.body.email).toBe('atualizado@xte.com');
    });

    it('erro ao atualizar cliente inexistente', async () => {
        const clienteId = 99999;
        const res = await request(app).put(`/api/clientes/${clienteId}`).send({
            nome: 'Cliente Inexistente',
            email: 'inexistente@xte.com',
            senha: 'SenhaInexistente'
        });
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Cliente não encontrado');
    });
});

describe('DELETE /api/clientes/:id', () => {
    it('deleta um cliente', async () => {
        const clienteId = 18;
        const res = await request(app).delete(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(204);
    });

    it('erro ao deletar cliente inexistente', async () => {
        const clienteId = 9999;
        const res = await request(app).delete(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Cliente não encontrado');
    });
});
