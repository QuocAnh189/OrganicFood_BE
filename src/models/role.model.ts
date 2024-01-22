import { IRole, IRoleType } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';
import { ObjectId } from 'mongodb';

const roleSchema = new Schema<IRole>(
  {
    roleId: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  },
);

export const Role = model<IRole>(SCHEMA.ROLE, roleSchema);

const roleTypeSchema = new Schema<IRoleType>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const RoleType = model<IRoleType>(SCHEMA.ROLETYPE, roleTypeSchema);
