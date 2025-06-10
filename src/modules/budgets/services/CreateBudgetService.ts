import { ICreateBudgetDTO } from '../dtos/ICreateBudgetDTO';
import { BudgetsRepository } from '../repositories/BudgetsRepository';

export class CreateBudgetService {
  constructor(private budgetsRepository: BudgetsRepository) {}

  async execute(data: ICreateBudgetDTO) {
    const budget = await this.budgetsRepository.create(data);
    return budget;
  }
}
