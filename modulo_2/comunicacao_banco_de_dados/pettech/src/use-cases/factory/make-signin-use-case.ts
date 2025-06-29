import { UserRepository } from "@/repositories/pg/user.repository";
import { SigninUseCase } from "../signin";

export function makeSignInUseCase() {
  const userRepository = new UserRepository();
  const signinUseCase = new SigninUseCase(userRepository);
  return signinUseCase;
}