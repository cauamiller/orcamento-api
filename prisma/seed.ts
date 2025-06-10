import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash('admin123', 8);

  const user = await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@email.com',
      password: passwordHash,
    },
  });

  console.log('✅ Usuário padrão criado:', user);
}

main()
  .catch((e) => {
    console.error('Erro no seeder:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
