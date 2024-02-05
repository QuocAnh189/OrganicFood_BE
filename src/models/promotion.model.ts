import { IPromotion } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

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
