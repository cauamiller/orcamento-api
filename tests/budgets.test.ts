import request from 'supertest';
import express from 'express';
import budgetsRoutes from '@Modules/budgets/controllers/budgets.routes'; // ajuste o caminho

const app = express();
app.use(express.json());
app.use('/budgets', budgetsRoutes);

describe('Budgets Routes', () => {
  it('should create a budget', async () => {
    const response = await request(app)
      .post('/budgets')
      .send({
        clientId: '123',
        items: [{ /* seus dados aqui */ }],
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id'); // ou qualquer propriedade esperada
  });

  it('should list budgets', async () => {
    const response = await request(app).get('/budgets');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
