import { BudgetsRepository } from '../repositories/BudgetsRepository';

export class ListBudgetsService {
  constructor(private budgetsRepository: BudgetsRepository) {}

  async execute() {
    const budgets = await this.budgetsRepository.findAll();
    return budgets;
  }
}
