import "reflect-metadata"
import fastify from 'fastify'
import { personRoutes } from './http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routes'
import { globalErrorHandler } from './util/global-error-handler'
import { addressRoutes } from './http/controllers/address/routes'
import '@/lib/typeorm/typeorm'
import { productRoutes } from "./http/controllers/product/routes"
import { categoryRoutes } from "./http/controllers/category/routes"
import fastifyJwt from "@fastify/jwt"
import { env } from "./env"
import { validateJwt } from "./http/middleware/jwt-validate"
export const app = fastify()
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  }
})
app.addHook('onRequest', validateJwt)
app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.register(productRoutes)
app.register(categoryRoutes)

app.setErrorHandler(globalErrorHandler)