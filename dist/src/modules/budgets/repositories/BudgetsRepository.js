"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsRepository = void 0;
const client_1 = __importDefault(require("../../../shared/infra/prisma/client"));
class BudgetsRepository {
    async create(data) {
        const total = data.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const budget = await client_1.default.budget.create({
            data: {
                clientId: data.clientId,
                total,
                items: data.items,
            },
        });
        return budget;
    }
    async findAll() {
        return client_1.default.budget.findMany({
            include: { client: true },
        });
    }
    async findById(id) {
        return client_1.default.budget.findUnique({
            where: { id },
            include: { client: true },
        });
    }
    async delete(id) {
        await client_1.default.budget.delete({ where: { id } });
    }
    async update(id, data) {
        const total = data.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const budget = await client_1.default.budget.update({
            where: { id },
            data: {
                clientId: data.clientId,
                items: data.items,
                total,
            },
        });
        return budget;
    }
}
exports.BudgetsRepository = BudgetsRepository;
