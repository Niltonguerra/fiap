import { request } from "http";
import { FastifyRequest, FastifyReply } from 'fastify';
import { makeDeleteProductUseCase } from "@/use-cases/factory/make-delete-product-use-case";
import { z } from "zod";

export async function deleteProduct(
  request: FastifyRequest,
  reply: FastifyReply){
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });
  const { id } = registerParamsSchema.parse(request.params);
  const deleteProductUseCase = makeDeleteProductUseCase();
  await deleteProductUseCase.handler(id);
  return reply.status(204).send();
}