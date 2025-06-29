import { FastifyReply, FastifyRequest } from "fastify";

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply
){
  try {
    const routeFreeList = ['POST-/user', 'POST-/user/signin'];
    const validateRoute = `${request.method}-${request.routeOptions.url}`;
    if (routeFreeList.includes(validateRoute)) {
      return;
    }

    const route = request.routeOptions.url
    const method = request.method

    await request.jwtVerify();

  } catch (error) {
    reply.status(401).send({
      message: "Unauthorized",
      error: "Unauthorized",
    });
  }
}