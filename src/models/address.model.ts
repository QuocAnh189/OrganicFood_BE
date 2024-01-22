import { IAddress } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';
import { Types } from 'mongoose';

const addressSchema = new Schema<IAddress>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: SCHEMA.USER },
    name: { type: String },
    country: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    code: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Address = model<IAddress>(SCHEMA.ADDRESS, addressSchema);
