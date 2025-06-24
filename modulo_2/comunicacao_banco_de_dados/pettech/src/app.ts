import "reflect-metadata"
import fastify from 'fastify'
import { personRoutes } from './http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routes'
import { globalErrorHandler } from './util/global-error-handler'
import { addressRoutes } from './http/controllers/address/routes'
import '@/lib/typeorm/typeorm'
export const app = fastify()
app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.setErrorHandler(globalErrorHandler)