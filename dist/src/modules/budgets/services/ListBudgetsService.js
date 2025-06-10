"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBudgetsService = void 0;
class ListBudgetsService {
    constructor(budgetsRepository) {
        this.budgetsRepository = budgetsRepository;
    }
    async execute() {
        const budgets = await this.budgetsRepository.findAll();
        return budgets;
    }
}
exports.ListBudgetsService = ListBudgetsService;
