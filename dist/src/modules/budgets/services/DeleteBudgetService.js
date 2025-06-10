"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBudgetService = void 0;
class DeleteBudgetService {
    constructor(budgetsRepository) {
        this.budgetsRepository = budgetsRepository;
    }
    async execute(id) {
        await this.budgetsRepository.delete(id);
    }
}
exports.DeleteBudgetService = DeleteBudgetService;
