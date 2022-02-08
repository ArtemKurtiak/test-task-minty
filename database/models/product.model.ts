
import { Document, model, Model, Schema } from 'mongoose';

import { IProduct } from '../../interfaces';
import { dbTablesEnum } from '../../constants/dbTablesEnum';

type ProductType = IProduct & Document;

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export const Product: Model<ProductType> = model<ProductType>(dbTablesEnum.product, ProductSchema);
