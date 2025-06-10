import { Request, Response, Router } from 'express';
import { BudgetsRepository } from '@Modules/budgets/repositories/BudgetsRepository';
import { CreateBudgetService } from '@Modules/budgets/services/CreateBudgetService';
import { ListBudgetsService } from '@Modules/budgets/services/ListBudgetsService';
import { DeleteBudgetService } from '../services/DeleteBudgetService';

const budgetsRoutes = Router();
const budgetsRepository = new BudgetsRepository();

/**
 * @swagger
 * /budgets:
 *   post:
 *     summary: Cria um novo orçamento
 *     tags: [Budgets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - items
 *             properties:
 *               clientId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     price:
 *                       type: number
 *     responses:
 *       201:
 *         description: Orçamento criado com sucesso
 */
budgetsRoutes.post('/', async (req: Request, res: Response): Promise<any> => {
  const { clientId, items } = req.body;

  const createBudgetService = new CreateBudgetService(budgetsRepository);
  const budget = await createBudgetService.execute({ clientId, items });

  return res.status(201).json(budget);
});

/**
 * @swagger
 * /budgets:
 *   get:
 *     summary: Lista todos os orçamentos
 *     tags: [Budgets]
 *     responses:
 *       200:
 *         description: Lista de orçamentos retornada com sucesso
 */
budgetsRoutes.get('/', async (req: Request, res: Response): Promise<any> => {
  const listBudgetsService = new ListBudgetsService(budgetsRepository);
  const budgets = await listBudgetsService.execute();

  return res.json(budgets);
});

/**
 * @swagger
 * /budgets/{id}:
 *   delete:
 *     summary: Exclui um orçamento
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do orçamento
 *     responses:
 *       204:
 *         description: Orçamento excluído com sucesso
 *       400:
 *         description: Erro ao excluir orçamento
 */
budgetsRoutes.delete('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const deleteBudgetService = new DeleteBudgetService(budgetsRepository);
    await deleteBudgetService.execute(id);
    return res.status(204).send();
  } catch (error: any) {
    console.error('Erro ao excluir orçamento:', error);
    return res.status(500).json({ error: 'Erro interno ao excluir orçamento' });
  }
});

/**
 * @swagger
 * /budgets/{id}:
 *   get:
 *     summary: Obtém os dados de um orçamento específico
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do orçamento
 *     responses:
 *       200:
 *         description: Orçamento retornado com sucesso
 *       404:
 *         description: Orçamento não encontrado
 */
budgetsRoutes.get('/:id', async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  const allBudgetsService = new ListBudgetsService(budgetsRepository);
  const budgets = await allBudgetsService.execute();
  const budget = budgets.find(b => b.id === id);

  if (!budget) {
    return res.status(404).json({ error: 'Orçamento não encontrado' });
  }

  return res.json(budget);
});

/**
 * @swagger
 * /budgets/{id}:
 *   put:
 *     summary: Atualiza um orçamento existente
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do orçamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - items
 *             properties:
 *               clientId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                     quantity:
 *                       type: number
 *                     value:
 *                       type: number
 *     responses:
 *       200:
 *         description: Orçamento atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar orçamento
 */
budgetsRoutes.put('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { clientId, items } = req.body;

    // Suponha que você tenha um método no repositório:
    const budget = await budgetsRepository.update(id, { clientId, items });

    return res.json(budget);
  } catch (error) {
    console.error("Erro ao atualizar orçamento:", error);
    return res.status(400).json({ error: "Erro ao atualizar orçamento" });
  }
});



export default budgetsRoutes;
