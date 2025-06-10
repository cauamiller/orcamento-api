"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientsRepository_1 = require("../repositories/ClientsRepository");
const CreateClientService_1 = require("../services/CreateClientService");
const ListClientsService_1 = require("../services/ListClientsService");
const UpdateClientService_1 = require("../services/UpdateClientService");
const DeleteClientService_1 = require("../services/DeleteClientService");
const clientsRoutes = (0, express_1.Router)();
const clientsRepository = new ClientsRepository_1.ClientsRepository();
/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
clientsRoutes.post('/', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Nome e email são obrigatórios' });
        }
        const createClientService = new CreateClientService_1.CreateClientService(clientsRepository);
        const client = await createClientService.execute({ name, email, phone });
        return res.status(201).json(client);
    }
    catch (error) {
        console.error('Erro ao criar cliente:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Lista de clientes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 */
clientsRoutes.get('/', async (req, res) => {
    try {
        const listClientsService = new ListClientsService_1.ListClientsService(clientsRepository);
        const clients = await listClientsService.execute();
        return res.json(clients);
    }
    catch (error) {
        console.error('Erro ao listar clientes:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     summary: Atualiza um cliente existente
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 */
clientsRoutes.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const updateClientService = new UpdateClientService_1.UpdateClientService(clientsRepository);
        const client = await updateClientService.execute({ id, name, email, phone });
        return res.json(client);
    }
    catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        return res.status(500).json({ error: 'Erro interno ao atualizar cliente' });
    }
});
/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     summary: Exclui um cliente
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente
 *     responses:
 *       204:
 *         description: Cliente excluído com sucesso
 *       400:
 *         description: Erro ao excluir cliente
 */
clientsRoutes.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteClientService = new DeleteClientService_1.DeleteClientService(clientsRepository);
        await deleteClientService.execute(id);
        return res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar cliente:', error);
        return res.status(500).json({ error: 'Erro interno ao deletar cliente' });
    }
});
/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     summary: Retorna um cliente pelo ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *       404:
 *         description: Cliente não encontrado
 */
clientsRoutes.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await clientsRepository.findById(id); // ou use um service se preferir
        if (!client) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        return res.status(200).json(client);
    }
    catch (error) {
        console.error('Erro ao buscar cliente:', error);
        return res.status(500).json({ error: 'Erro interno ao buscar cliente' });
    }
});
exports.default = clientsRoutes;
