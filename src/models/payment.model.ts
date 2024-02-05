import { IPayment } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const paymentSchema = new Schema<IPayment>(
  {
    method: { type: String, required: true },
    numberCart: { type: String, required: true },
    totalValue: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Payment = model<IPayment>(SCHEMA.PAYMENT, paymentSchema);
