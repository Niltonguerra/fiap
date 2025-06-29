import { UserRepository } from "@/repositories/pg/user.repository";
import { CreateUserUseCase } from "@/use-cases/create-user";
import { makeCreateUserUseCase } from "@/use-cases/factory/make-create-user-use-case";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply:FastifyReply){
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(request.body);

  const hashedPassword = await hash(password, 8)

  const userWithHashedPassword = { username, password: hashedPassword };

  const createUserUseCase = makeCreateUserUseCase();

  const user = await createUserUseCase.handle(userWithHashedPassword);

  return reply.status(201).send({username:user?.username, id:user?.id});

}