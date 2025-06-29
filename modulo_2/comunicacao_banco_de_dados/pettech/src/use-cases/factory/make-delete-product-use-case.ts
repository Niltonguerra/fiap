import { ProductRepository } from "@/repositories/typeorm/product.repository";
import { DeleteProductUseCase } from "../delete-product";

export function makeDeleteProductUseCase(){
  const productRepository = new ProductRepository();
  const deleteProductRepository = new DeleteProductUseCase(productRepository);
  return deleteProductRepository;
}