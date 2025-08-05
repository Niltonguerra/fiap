import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IProduct } from './models/product.interface';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product implements IProduct {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop({ type: String, required: false })
  relationId?: string | undefined;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
