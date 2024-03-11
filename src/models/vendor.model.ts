import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IVendor } from '@/interfaces';

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
