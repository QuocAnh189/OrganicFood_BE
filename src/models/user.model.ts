import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IUser } from '@/interfaces';

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String },
    phone: { type: String },
    gender: { type: String },
    password: { type: String },
    birthDay: { type: Date },
    isActive: { type: Boolean, default: true },
    addresses: [{ type: Schema.ObjectId, ref: SCHEMA.ADDRESS, default: [] }],
    role: { type: Schema.ObjectId },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>(SCHEMA.USER, userSchema);
