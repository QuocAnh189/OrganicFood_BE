import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';
import { IRole, ERole } from '@/interfaces';

const roleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true, default: ERole.CUSTOMER },
  },
  {
    timestamps: true,
  },
);

export const Role = model<IRole>(SCHEMA.ROLE, roleSchema);
