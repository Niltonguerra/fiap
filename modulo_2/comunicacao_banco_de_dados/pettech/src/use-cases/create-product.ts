import { IProduct } from '@/entities/models/product.interface';
import { ProductRepository } from '../repositories/typeorm/product.repository';
export class CreateProductUseCase {
  constructor(private ProductRepository: ProductRepository) {}
  async handler(product:IProduct):Promise<IProduct> {
    return this.ProductRepository.create(product);
  }
}