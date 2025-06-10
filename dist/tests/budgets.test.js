"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const budgets_routes_1 = __importDefault(require("modules/budgets/controllers/budgets.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/budgets', budgets_routes_1.default);
describe('Budgets Routes', () => {
    it('should create a budget', async () => {
        const response = await (0, supertest_1.default)(app)
            .post('/budgets')
            .send({
            clientId: '123',
            items: [{ /* seus dados aqui */}],
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id'); // ou qualquer propriedade esperada
    });
    it('should list budgets', async () => {
        const response = await (0, supertest_1.default)(app).get('/budgets');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
