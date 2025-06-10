"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_routes_1 = __importDefault(require("../../../../modules/clients/controllers/clients.routes"));
const budgets_routes_1 = __importDefault(require("../../../../modules/budgets/controllers/budgets.routes"));
const auth_routes_1 = __importDefault(require("../../../../modules/users/controllers/auth.routes"));
const routes = (0, express_1.Router)();
routes.use('/clients', clients_routes_1.default);
routes.use('/budgets', budgets_routes_1.default);
routes.use('/auth', auth_routes_1.default);
exports.default = routes;
