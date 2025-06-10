import { ClientsRepository } from '../repositories/ClientsRepository';

export class DeleteClientService {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute(id: string) {
    await this.clientsRepository.delete(id);
  }
}