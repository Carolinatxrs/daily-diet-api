import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import z from 'zod'
import { randomUUID } from 'node:crypto'
import { checkSessionIdExists } from './middlewares/check-session-id-exists'

export async function mealsRoutes(app: FastifyInstance) {
  app.get('/', { preHandler: [checkSessionIdExists] }, async (request) => {
    const meals = await knex('meals')
      .where({ user_id: request.user?.id })
      .select()

    return { meals }
  })

  app.get(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const getMealParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getMealParamsSchema.parse(request.params)

      const meals = await knex('meals')
        .where({ id, user_id: request.user?.id })
        .first()

      if (!meals) {
        return reply.status(400).send({ error: 'Meal not found' })
      }

      return { meals }
    },
  )

  app.post(
    '/',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const createMealsBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        isOnDiet: z.boolean(),
        date: z.string().datetime(),
      })

      const { name, description, isOnDiet, date } = createMealsBodySchema.parse(
        request.body,
      )

      await knex('meals').insert({
        id: randomUUID(),
        user_id: request.user?.id,
        name,
        description,
        is_on_diet: isOnDiet,
        date,
      })

      return reply.status(201).send()
    },
  )

  app.put(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const idMealParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const updateMealsBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        isOnDiet: z.boolean(),
        date: z.string().datetime(),
      })

      const { id } = idMealParamsSchema.parse(request.params)

      const { name, description, isOnDiet, date } = updateMealsBodySchema.parse(
        request.body,
      )

      const mealExists = await knex('meals').where({ id }).first()

      if (!mealExists) {
        return reply.status(400).send({ error: 'Meal not found' })
      }

      await knex('meals').where({ id, user_id: request.user?.id }).update({
        name,
        description,
        is_on_diet: isOnDiet,
        date,
      })

      return reply.status(201).send()
    },
  )
}
