import { Address } from "@/entities/address.entity";
import { IAddress } from "@/entities/models/address.interface";
import { IPerson } from "@/entities/models/person.interface";



export interface IAddressRepository {
  findAddressByPerson(
    personId: number,
    page:number,
    limit:number
  ): Promise<(IAddress & IPerson)[]>;

  create(address: Address): Promise<IAddress | undefined>;
}