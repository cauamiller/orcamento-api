import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1', routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}/api/v1`);
  console.log(`📚 Swagger docs at http://localhost:${PORT}/api-docs`);
});