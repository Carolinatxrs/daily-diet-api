import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('Users routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it('should be able to create an user', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'test@example.com',
      })
      .expect(201)
  })

  it('should be able to list all users', async () => {
    await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'test@example.com',
    })

    const listUsersResponse = await request(app.server)
      .get('/users')
      .expect(200)

    expect(listUsersResponse.body.users).toEqual([
      expect.objectContaining({
        name: 'John Doe',
        email: 'test@example.com',
      }),
    ])
  })
})
