"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthenticateUserService_1 = require("../../users/services/AuthenticateUserService");
const authRoutes = (0, express_1.Router)();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica um cliente com e-mail e senha
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autenticado com sucesso
 */
authRoutes.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const service = new AuthenticateUserService_1.AuthenticateUserService();
    try {
        const result = await service.execute({ email, password });
        return res.json(result);
    }
    catch (err) {
        return res.status(401).json({ error: err.message });
    }
});
exports.default = authRoutes;
