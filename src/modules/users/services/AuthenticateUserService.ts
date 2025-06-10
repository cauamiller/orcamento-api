import prisma from '../../../shared/infra/prisma/client'; 
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IRequest) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('E-mail ou senha incorretos.');

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error('E-mail ou senha incorretos.');

    const token = sign(
      { sub: user.id },
      process.env.JWT_SECRET || 'defaultsecret',
      { expiresIn: '1d' }
    );

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
