import { IBudgetsRepository } from './IBudgetsRepository';
import { ICreateBudgetDTO } from '../dtos/ICreateBudgetDTO';
import { Budget } from '@prisma/client';
import prisma from '@Shared/infra/prisma/client';

export class BudgetsRepository implements IBudgetsRepository {
  async create(data: ICreateBudgetDTO): Promise<Budget> {
    const total = data.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const budget = await prisma.budget.create({
      data: {
        clientId: data.clientId,
        total,
        items: data.items,
      },
    });

    return budget;
  }

  async findAll(): Promise<Budget[]> {
    return prisma.budget.findMany({
      include: { client: true },
    });
  }

  async findById(id: string): Promise<Budget | null> {
    return prisma.budget.findUnique({
      where: { id },
      include: { client: true },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.budget.delete({ where: { id } });
  }
  
  async update(id: string, data: ICreateBudgetDTO): Promise<Budget> {
    const total = data.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const budget = await prisma.budget.update({
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
