import { IProduct, ISize } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const SizeSchema = new Schema<ISize>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    promotion: { type: Schema.ObjectId, ref: SCHEMA.PROMOTION },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: Schema.ObjectId, required: true, ref: SCHEMA.CATEGORY },
    origin: { type: String, required: true },
    sizes: { type: [SizeSchema], required: true },
    stockQuantity: { type: Number, required: true },
    rates: [{ type: Schema.ObjectId, default: [], ref: SCHEMA.RATE }],
    purchases: { type: Number, required: true, default: 0 },
    store: { type: Schema.ObjectId, required: true, ref: SCHEMA.STORE },
  },
  { timestamps: true },
);

export const Product = model<IProduct>(SCHEMA.PRODUCT, productSchema);
