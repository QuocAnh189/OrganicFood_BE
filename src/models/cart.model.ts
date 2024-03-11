import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interfaces
import { ICart } from '@/interfaces';

const cartSchema = new Schema<ICart>(
  {
    user: { type: Schema.ObjectId, required: true, ref: SCHEMA.USER },
    product: { type: Schema.ObjectId, required: true, ref: SCHEMA.PRODUCT },
    quantity: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Cart = model<ICart>(SCHEMA.CART, cartSchema);
