import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IOrder } from '@/interfaces';

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.ObjectId, required: true, ref: SCHEMA.USER },
    address: { type: Schema.ObjectId, required: true, ref: SCHEMA.ADDRESS },
    orderItems: [{ type: Schema.ObjectId, required: true, ref: SCHEMA.ORDERITEM }],
    totalValue: { type: Number, required: true },
    status: { type: String, required: true },
    payment: { type: Schema.ObjectId, required: true, ref: SCHEMA.PAYMENT },
    paid: { type: Boolean, required: true },
    ship: { type: Schema.ObjectId, required: true, ref: SCHEMA.SHIPPER },
  },
  { timestamps: true },
);

export const Order = model<IOrder>(SCHEMA.ORDER, orderSchema);
