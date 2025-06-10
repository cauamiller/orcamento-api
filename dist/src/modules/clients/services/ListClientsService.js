"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClientsService = void 0;
class ListClientsService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    async execute() {
        const clients = await this.clientsRepository.findAll();
        return clients;
    }
}
exports.ListClientsService = ListClientsService;
