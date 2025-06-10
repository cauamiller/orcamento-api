import { BudgetsRepository } from '../repositories/BudgetsRepository';

export class DeleteBudgetService {
  constructor(private budgetsRepository: BudgetsRepository) {}

  async execute(id: string) {
    await this.budgetsRepository.delete(id);
  }
}