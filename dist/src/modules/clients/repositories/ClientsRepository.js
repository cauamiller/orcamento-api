"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRepository = void 0;
const client_1 = __importDefault(require("../../../shared/infra/prisma/client"));
class ClientsRepository {
    async create({ name, email, phone }) {
        const client = await client_1.default.client.create({
            data: {
                name,
                email,
                phone,
            },
        });
        return client;
    }
    async findAll() {
        const clients = await client_1.default.client.findMany();
        return clients;
    }
    async update({ id, name, email, phone }) {
        return client_1.default.client.update({
            where: { id },
            data: { name, email, phone },
        });
    }
    async delete(id) {
        await client_1.default.client.delete({ where: { id } });
    }
    async findById(id) {
        const client = await client_1.default.client.findUnique({
            where: { id },
        });
        return client;
    }
}
exports.ClientsRepository = ClientsRepository;
