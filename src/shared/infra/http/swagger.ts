import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gerenciador de Orçamentos - API',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de orçamentos',
    },
    servers: [
      {
        url: 'http://localhost:3333/api/v1',
      },
    ],
  },
  apis: ['**/*.routes.ts'], // <- define onde buscar os comentários das rotas
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);