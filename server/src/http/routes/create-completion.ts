import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import fastify from 'fastify'
import { createGoalCompletion } from '../../functions/create-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async (
  app,
  _opts
) => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      await createGoalCompletion({
        goalId,
      })
    }
  )
}