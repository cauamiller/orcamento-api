"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientService = void 0;
class DeleteClientService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    async execute(id) {
        await this.clientsRepository.delete(id);
    }
}
exports.DeleteClientService = DeleteClientService;
