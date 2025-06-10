import request from 'supertest'
import express from 'express'
import clientsRoutes from '@Modules/clients/controllers/clients.routes' // ajuste o caminho

const app = express()
app.use(express.json())
app.use('/clients', clientsRoutes)

describe('Clients API', () => {
  // Dados válidos para criar cliente
  const validClientPayload = {
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '11999999999',
  }

  let createdClientId: string

  it('deve criar um cliente com dados válidos', async () => {
    const response = await request(app)
      .post('/clients')
      .send(validClientPayload)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe(validClientPayload.name)
    expect(response.body.email).toBe(validClientPayload.email)

    createdClientId = response.body.id
  })

  it('deve retornar erro se nome não for enviado', async () => {
    const { name, ...payloadNoName } = validClientPayload
    const response = await request(app)
      .post('/clients')
      .send(payloadNoName)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
  })

  it('deve listar clientes', async () => {
    const response = await request(app).get('/clients')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('deve retornar cliente por id', async () => {
    const response = await request(app).get(`/clients/${createdClientId}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id', createdClientId)
    expect(response.body).toHaveProperty('name', validClientPayload.name)
  })

  it('deve atualizar cliente por id', async () => {
    const updatedName = 'João Atualizado'
    const response = await request(app)
      .put(`/clients/${createdClientId}`)
      .send({ name: updatedName, email: validClientPayload.email, phone: validClientPayload.phone })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('name', updatedName)
  })

  it('deve deletar cliente por id', async () => {
    const response = await request(app).delete(`/clients/${createdClientId}`)

    expect(response.status).toBe(204)
  })

  it('deve retornar 404 ao buscar cliente deletado', async () => {
    const response = await request(app).get(`/clients/${createdClientId}`)
    expect(response.status).toBe(404)
  })
})
