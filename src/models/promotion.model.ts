import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interfaces
import { IPromotion } from '@/interfaces';

const promotionSchema = new Schema<IPromotion>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, required: true },
    status: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Promotion = model<IPromotion>(SCHEMA.PROMOTION, promotionSchema);
