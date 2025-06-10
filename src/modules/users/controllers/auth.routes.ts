import { Router, Request, Response } from 'express';
import { AuthenticateUserService } from '../../users/services/AuthenticateUserService';

const authRoutes = Router();

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
authRoutes.post('/login', async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  const service = new AuthenticateUserService();
  try {
    const result = await service.execute({ email, password });
    return res.json(result);
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
});

export default authRoutes;
