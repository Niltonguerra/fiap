import fastify from 'fastify'
import { personRoutes } from './http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()
app.register(personRoutes)
app.register(userRoutes)

app.setErrorHandler((error,_,reply) => {
  if(error instanceof ZodError){
    return reply
      .status(400)
      .send({message:"Validation error", error: error.format()})
  }

  if(env.NODE_ENV === 'development') {
    console.error(error)
  }

  return reply.status(500).send({message:'Internal server error'})
})