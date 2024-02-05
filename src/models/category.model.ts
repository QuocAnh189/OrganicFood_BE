import { ICategory } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const Category = model<ICategory>(SCHEMA.CATEGORY, categorySchema);
