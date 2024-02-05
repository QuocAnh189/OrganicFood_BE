import { IStore } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const storeSchema = new Schema<IStore>(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    address: { type: Schema.ObjectId, required: true, ref: SCHEMA.ADDRESS },
    voucher: [{ type: Schema.ObjectId, required: true, ref: SCHEMA.VOUCHER }],
  },
  { timestamps: true },
);

export const Store = model<IStore>(SCHEMA.STORE, storeSchema);