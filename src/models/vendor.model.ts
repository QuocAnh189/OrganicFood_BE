import { IVendor } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const vendorSchema = new Schema<IVendor>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: Schema.ObjectId, required: true, ref: SCHEMA.ADDRESS },
  },
  { timestamps: true },
);

export const Vendor = model<IVendor>(SCHEMA.VENDOR, vendorSchema);
