import { IProduct } from 'src/stock/schemas/models/product.interface';
import { ProductRepository } from '../product.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/stock/schemas/product.schema';
import { Model } from 'mongoose';

export class ProductMongooseRepository implements ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<IProduct>,
  ) {}

  getAllStock(limit: number, page: number): Promise<IProduct[]> {
    const offset = (page - 1) * limit;
    return this.productModel.find().skip(offset).limit(limit).exec();
  }
  getStock(productId: string): Promise<IProduct | null> {
    try {
      return this.productModel.findById(productId).exec();
    } catch (error) {
      console.error('Error fetching product:', error);
      return Promise.resolve(null);
    }
  }
  async createStock(product: IProduct): Promise<void> {
    const newProduct = new this.productModel(product);
    await newProduct.save();
  }
  async updateStock(productId: string, stock: number): Promise<void> {
    await this.productModel
      .updateOne({ _id: productId }, { quantity: stock })
      .exec();
  }
  async deleteStock(productId: string): Promise<void> {
    await this.productModel.deleteOne({ _id: productId }).exec();
  }
}
