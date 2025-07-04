import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findUser } from "./find-user";
import { signin } from "./signin";

export async function userRoutes(app:FastifyInstance){
  app.post("/user", create);
  app.get("/user/:id", findUser); 
  app.post('/user/signin',signin)

}