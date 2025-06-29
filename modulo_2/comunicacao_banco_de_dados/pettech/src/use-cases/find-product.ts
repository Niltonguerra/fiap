import { IProductRepository } from "@/repositories/product.repository.interface";

export class FindProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(id:string){
    const product = await this.productRepository.findById(id);
    if (!product) throw new Error("Product not found"); 
    return product;
  }
}