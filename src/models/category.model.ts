import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { ICategory } from '@/interfaces';

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const Category = model<ICategory>(SCHEMA.CATEGORY, categorySchema);
