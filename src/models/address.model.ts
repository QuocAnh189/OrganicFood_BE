import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IAddress } from '@/interfaces';

const addressSchema = new Schema<IAddress>(
  {
    owner: {
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
