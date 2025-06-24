import { IAddress } from "@/entities/models/address.interface";
import { IAddressRepository } from "@/repositories/address.repository.interface";


export class CreateAddressUseCase {
  constructor(private addressrepository: IAddressRepository) {}

  async handler(Address:IAddress): Promise<IAddress | undefined> {
    return this.addressrepository.create(Address);
  }

}