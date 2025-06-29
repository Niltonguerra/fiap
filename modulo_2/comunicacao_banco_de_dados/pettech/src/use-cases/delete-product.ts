import { ProductRepository } from "@/repositories/typeorm/product.repository";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async handler(id: string): Promise<void> {
    return this.productRepository.delete(id)
  }
}