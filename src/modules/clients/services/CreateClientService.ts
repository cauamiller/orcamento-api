import { ClientsRepository } from '../repositories/ClientsRepository';

interface CreateClientDTO {
  name: string;
  email: string;
  phone?: string;
}

export class CreateClientService {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute({ name, email, phone }: CreateClientDTO) {
    // Aqui você pode colocar validações, como email único
    const client = await this.clientsRepository.create({ name, email, phone });
    return client;
  }
}
