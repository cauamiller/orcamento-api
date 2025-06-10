import { Budget } from '@prisma/client';
import { ICreateBudgetDTO } from '../dtos/ICreateBudgetDTO';

export interface IBudgetsRepository {
  create(data: ICreateBudgetDTO): Promise<Budget>;
  findAll(): Promise<Budget[]>;
  findById(id: string): Promise<Budget | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: ICreateBudgetDTO): Promise<Budget>; // <-- novo método
}
