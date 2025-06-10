import { Router } from 'express';
import clientsRoutes from '../../../../modules/clients/controllers/clients.routes';
import budgetsRoutes from '../../../../modules/budgets/controllers/budgets.routes'; 
import authRoutes from '../../../../modules/users/controllers/auth.routes'; 

const routes = Router();

routes.use('/clients', clientsRoutes);
routes.use('/budgets', budgetsRoutes);
routes.use('/auth', authRoutes);

export default routes;