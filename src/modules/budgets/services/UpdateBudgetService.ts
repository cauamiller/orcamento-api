import { IBudgetsRepository } from '../repositories/IBudgetsRepository';
import { IUpdateBudgetDTO } from '../dtos/IUpdateBudgetDTO';
import { Budget } from '@prisma/client';

export class UpdateBudgetService {
  constructor(private budgetsRepository: IBudgetsRepository) {}

  async execute(id: string, data: IUpdateBudgetDTO): Promise<Budget> {
    const budget = await this.budgetsRepository.findById(id);

    if (!budget) {
      throw new Error('Orçamento não encontrado');
    }

    return this.budgetsRepository.update(id, data);
  }
}
