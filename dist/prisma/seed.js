"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const prisma = new client_1.PrismaClient();
async function main() {
    const passwordHash = await (0, bcryptjs_1.hash)('admin123', 8);
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
