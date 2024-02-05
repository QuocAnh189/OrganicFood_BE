import { IAddress } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const addressSchema = new Schema<IAddress>(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: SCHEMA.USER || SCHEMA.STORE || SCHEMA.ORDER || SCHEMA.SHIPPER,
    },
    country: { type: String },
    city: { type: String },
    district: { type: String },
    street: { type: String },
    postalCode: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Address = model<IAddress>(SCHEMA.ADDRESS, addressSchema);
