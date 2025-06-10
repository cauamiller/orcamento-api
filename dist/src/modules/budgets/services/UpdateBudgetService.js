"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBudgetService = void 0;
class UpdateBudgetService {
    constructor(budgetsRepository) {
        this.budgetsRepository = budgetsRepository;
    }
    async execute(id, data) {
        const budget = await this.budgetsRepository.findById(id);
        if (!budget) {
            throw new Error('Orçamento não encontrado');
        }
        return this.budgetsRepository.update(id, data);
    }
}
exports.UpdateBudgetService = UpdateBudgetService;
