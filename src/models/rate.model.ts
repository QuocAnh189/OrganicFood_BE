import { IRate } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const rateSchema = new Schema<IRate>(
  {
    userId: { type: Schema.ObjectId, required: true, ref: SCHEMA.USER },
    rate: { type: Number, required: true },
    comment: { type: String },
  },
  { timestamps: true },
);

export const Rate = model<IRate>(SCHEMA.RATE, rateSchema);
