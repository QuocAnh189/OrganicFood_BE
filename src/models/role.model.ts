import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
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
