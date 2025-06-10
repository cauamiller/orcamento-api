"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientService = void 0;
class CreateClientService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    async execute({ name, email, phone }) {
        // Aqui você pode colocar validações, como email único
        const client = await this.clientsRepository.create({ name, email, phone });
        return client;
    }
}
exports.CreateClientService = CreateClientService;
