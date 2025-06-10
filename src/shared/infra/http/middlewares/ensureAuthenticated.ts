import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token não informado.' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, process.env.JWT_SECRET || 'defaultsecret');
    req.user = { id: (decoded as any).sub };
    return next();
  } catch {
    return res.status(401).json({ error: 'Token inválido.' });
  }
}