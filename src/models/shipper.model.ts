import { IShipper } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const shipperSchema = new Schema<IShipper>(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    deliveryTime: { type: Date, required: true },
    address: { type: Schema.ObjectId, required: true, ref: SCHEMA.ADDRESS },
    rates: [{ type: Schema.ObjectId, required: true, ref: SCHEMA.SHIPPER }],
  },
  { timestamps: true },
);

export const Shipper = model<IShipper>(SCHEMA.SHIPPER, shipperSchema);
