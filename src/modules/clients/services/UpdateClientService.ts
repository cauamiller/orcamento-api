import { ClientsRepository } from '../repositories/ClientsRepository';

interface IUpdateClientDTO {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export class UpdateClientService {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute(data: IUpdateClientDTO) {
    return this.clientsRepository.update(data);
  }
}