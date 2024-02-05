import { IOrderItem } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const orderItemSchema = new Schema<IOrderItem>(
  {
    cartId: { type: Schema.ObjectId, required: true, ref: SCHEMA.CART },
    totalValue: { type: Number, required: true },
  },
  { timestamps: true },
);

export const OrderItem = model<IOrderItem>(SCHEMA.ORDERITEM, orderItemSchema);
