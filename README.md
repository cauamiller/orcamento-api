# 🧾 Orçamento API

API RESTful para gerenciamento de orçamentos, clientes e usuários.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma (ORM)
- PostgreSQL
- Swagger (documentação)
- Jest + Supertest (testes)

## 📁 Estrutura

```
src/
├── modules/
│   ├── budgets/
│   ├── clients/
│   └── users/
├── shared/
│   └── infra/http/
```

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/orcamento-api.git
cd orcamento-api
```

2. Instale as dependências:

```bash
yarn
```

3. Configure o banco de dados:

```bash
cp .env.example .env
# edite as variáveis de ambiente conforme necessário
```

4. Rode as migrations:

```bash
npx prisma migrate dev
```

5. Compile o projeto:

```bash
yarn build
```

6. Inicie o servidor:

```bash
yarn start
```

## 🧪 Testes

```bash
yarn test
```

## 📄 Documentação Swagger

Após rodar o servidor, acesse:

```
http://localhost:3333/api-docs
```

## 🔐 Credenciais de Teste

- **Email:** admin@email.com  
- **Senha:** admin123

---

## 💡 Observações

- Use ferramentas como Insomnia ou Postman para testar a API.
- O projeto está usando caminhos relativos (sem aliases) para compatibilidade com ambientes como Render.
