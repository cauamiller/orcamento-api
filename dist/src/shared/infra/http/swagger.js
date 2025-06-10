"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerOptions = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gerenciador de Orçamentos - API',
            version: '1.0.0',
            description: 'Documentação da API para gerenciamento de orçamentos',
        },
        servers: [
            {
                url: 'http://localhost:3333/api/v1',
            },
        ],
    },
    apis: ['**/*.routes.ts'], // <- define onde buscar os comentários das rotas
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(exports.swaggerOptions);
