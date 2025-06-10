"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientService = void 0;
class UpdateClientService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    async execute(data) {
        return this.clientsRepository.update(data);
    }
}
exports.UpdateClientService = UpdateClientService;
