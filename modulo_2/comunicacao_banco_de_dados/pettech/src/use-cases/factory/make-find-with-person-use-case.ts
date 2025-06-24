import { UserRepository } from '@/repositories/pg/user.repository';
import { FindWithPersonUseCase } from '../find-with-person';

export function makeFindWithPersonUseCase(){
  const userRepository = new UserRepository()
  const createPersonUseCase = new FindWithPersonUseCase(userRepository)
  return createPersonUseCase
}