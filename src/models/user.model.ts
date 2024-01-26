import { IUser } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    avatar: { type: String },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    fullname: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date },
    isActive: { type: Boolean, default: true },
    refreshToken: { type: String },
    role: { type: String, ref: SCHEMA.ROLE },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>(SCHEMA.USER, userSchema);
