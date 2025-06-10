"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = require("bcryptjs");
const client_1 = __importDefault(require("../../../shared/infra/prisma/client"));
const usersRoutes = (0, express_1.Router)();
usersRoutes.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await (0, bcryptjs_1.hash)(password, 8);
    const user = await client_1.default.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
    return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
    });
});
exports.default = usersRoutes;
