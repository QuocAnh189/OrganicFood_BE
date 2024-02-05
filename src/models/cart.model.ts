import { ICart } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const cartSchema = new Schema<ICart>(
  {
    userId: { type: Schema.ObjectId, required: true, ref: SCHEMA.USER },
    productId: { type: Schema.ObjectId, required: true, ref: SCHEMA.PRODUCT },
    quantity: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Cart = model<ICart>(SCHEMA.CART, cartSchema);
