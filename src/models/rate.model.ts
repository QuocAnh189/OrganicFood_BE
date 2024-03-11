import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IRate } from '@/interfaces';

const rateSchema = new Schema<IRate>(
  {
    user: { type: Schema.ObjectId, required: true, ref: SCHEMA.USER },
    rate: { type: Number, required: true },
    comment: { type: String },
  },
  { timestamps: true },
);

export const Rate = model<IRate>(SCHEMA.RATE, rateSchema);
