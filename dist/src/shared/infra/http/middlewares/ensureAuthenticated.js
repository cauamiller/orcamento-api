"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = ensureAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: 'Token não informado.' });
    const [, token] = authHeader.split(' ');
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET || 'defaultsecret');
        req.user = { id: decoded.sub };
        return next();
    }
    catch {
        return res.status(401).json({ error: 'Token inválido.' });
    }
}
