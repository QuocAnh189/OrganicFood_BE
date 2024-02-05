import { IUser } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String },
    phone: { type: String },
    password: { type: String },
    isActive: { type: Boolean },
    addresses: { type: Schema.ObjectId, ref: SCHEMA.ADDRESS },
    role: { type: Schema.ObjectId },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>(SCHEMA.USER, userSchema);
