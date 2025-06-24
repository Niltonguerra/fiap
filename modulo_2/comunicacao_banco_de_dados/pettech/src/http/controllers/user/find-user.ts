import { UserRepository } from "@/repositories/pg/user.repository";
import { makeFindWithPersonUseCase } from "@/use-cases/factory/make-find-with-person-use-case";
import { FindWithPersonUseCase } from "@/use-cases/find-with-person";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findUser(request: FastifyRequest, reply:FastifyReply){
  const registerParamnsSchema = z.object({
    id: z.coerce.number(),   
  })

  const { id } = registerParamnsSchema.parse(request.params);
  const findWithPersonUseCase = makeFindWithPersonUseCase();
  const user = await findWithPersonUseCase.handler(id);

  return reply.status(200).send(user);

}