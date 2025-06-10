"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserService = void 0;
const client_1 = __importDefault(require("../../../shared/infra/prisma/client"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateUserService {
    async execute({ email, password }) {
        const user = await client_1.default.user.findUnique({ where: { email } });
        if (!user)
            throw new Error('E-mail ou senha incorretos.');
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatch)
            throw new Error('E-mail ou senha incorretos.');
        const token = (0, jsonwebtoken_1.sign)({ sub: user.id }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1d' });
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    }
}
exports.AuthenticateUserService = AuthenticateUserService;
