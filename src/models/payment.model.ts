import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IPayment } from '@/interfaces';

const paymentSchema = new Schema<IPayment>(
  {
    method: { type: String, required: true },
    numberCart: { type: String, required: true },
    totalValue: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Payment = model<IPayment>(SCHEMA.PAYMENT, paymentSchema);
