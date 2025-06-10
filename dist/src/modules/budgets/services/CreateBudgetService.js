"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBudgetService = void 0;
class CreateBudgetService {
    constructor(budgetsRepository) {
        this.budgetsRepository = budgetsRepository;
    }
    async execute(data) {
        const budget = await this.budgetsRepository.create(data);
        return budget;
    }
}
exports.CreateBudgetService = CreateBudgetService;
