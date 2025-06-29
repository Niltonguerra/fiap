import { ProductRepository } from "@/repositories/typeorm/product.repository"
import { FindAllProductsUseCase } from "../find-all-products";

export function makeFindAllProductUseCase(){
  const productRepository = new ProductRepository();
  const findAllProductUsecase = new FindAllProductsUseCase(productRepository);
  return findAllProductUsecase;
}