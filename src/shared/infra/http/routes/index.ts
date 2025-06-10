import { Router } from 'express';
import clientsRoutes from '@Modules/clients/controllers/clients.routes';
import budgetsRoutes from '@Modules/budgets/controllers/budgets.routes';
import authRoutes from '@Modules/users/controllers/auth.routes';

const routes = Router();

routes.use('/clients', clientsRoutes);
routes.use('/budgets', budgetsRoutes);
routes.use('/auth', authRoutes);

export default routes;