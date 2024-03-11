import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IVoucher } from '@/interfaces';

const voucherSchema = new Schema<IVoucher>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    minPrice: { type: Number, required: true },
    value: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Voucher = model<IVoucher>(SCHEMA.VOUCHER, voucherSchema);
