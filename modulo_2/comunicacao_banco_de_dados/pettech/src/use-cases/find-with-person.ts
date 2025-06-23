import { User } from '@/entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { Person } from '@/entities/person.entity';

export class FindWithPersonUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(userId: number): Promise<User & Person | undefined> {
    return this.userRepository.findWithPersonId(userId);
  }
}