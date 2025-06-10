import { Router, Request, Response } from 'express';
import { hash } from 'bcryptjs';
import prisma from '../../../shared/infra/prisma/client'; 

const usersRoutes = Router();

usersRoutes.post('/', async (req: Request, res: Response): Promise<any> => {
  const { name, email, password } = req.body;

  const hashedPassword = await hash(password, 8);

  const user = await prisma.user.create({
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

export default usersRoutes;
