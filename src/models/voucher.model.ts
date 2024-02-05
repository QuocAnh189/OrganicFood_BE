import { IVoucher } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

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
