import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IOrderItem } from '@/interfaces';

const orderItemSchema = new Schema<IOrderItem>(
  {
    cart: { type: Schema.ObjectId, required: true, ref: SCHEMA.CART },
    totalValue: { type: Number, required: true },
  },
  { timestamps: true },
);

export const OrderItem = model<IOrderItem>(SCHEMA.ORDERITEM, orderItemSchema);
