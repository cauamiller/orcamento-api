import { Client } from '@prisma/client';
import prisma from '../../../shared/infra/prisma/client'; 

interface CreateClientDTO {
  name: string;
  email: string;
  phone?: string;
}

interface IUpdateClientDTO {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export class ClientsRepository {
  async create({ name, email, phone }: CreateClientDTO) {
    const client = await prisma.client.create({
      data: {
        name,
        email,
        phone,
      },
    });

    return client;
  }

  async findAll() {
    const clients = await prisma.client.findMany();
    return clients;
  }

  async update({ id, name, email, phone }: IUpdateClientDTO): Promise<Client> {
    return prisma.client.update({
      where: { id },
      data: { name, email, phone },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({ where: { id } });
  }

  async findById(id: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: { id },
    });
    return client;
  }
}