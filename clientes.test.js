const app = require("./index");
const request = require("supertest");

describe('GET /api/clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/api/clientes').send();
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('retornar cliente específico com sucesso', async () => {
        const clienteId = 5; 
        const res = await request(app).get(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(200);
        expect(res.body.id).toBe(clienteId);
    });

    it('retornar 404 se o cliente não for encontrado', async () => {
        const clienteId = 9999654656; 
        const res = await request(app).get(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Cliente não encontrado');
    });
});

describe('POST /api/clientes', () => {
    it('criar cliente com sucesso', async () => {
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
    it('atualizar cliente com sucesso', async () => {
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

    it('retornar 404 se o cliente não for encontrado', async () => {
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
    it('deletar cliente com sucesso', async () => {
        const clienteId = 2; // ID existente
        const res = await request(app).delete(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(204);
    });

    it('retornar 404 se o cliente não for encontrado', async () => {
        const clienteId = 9999; // ID que não existe
        const res = await request(app).delete(`/api/clientes/${clienteId}`).send();
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Cliente não encontrado');
    });
});
