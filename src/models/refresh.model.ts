import { IRefreshToken } from '@/interfaces';
import { Schema, model } from 'mongoose';
import { SCHEMA } from './schema-name';

const RefreshTokenSchema = new Schema<IRefreshToken>(
  {
    user_id: { type: Schema.ObjectId, ref: SCHEMA.USER },
    token: { type: String, unique: true },
  },

  {
    timestamps: true,
  },
);

export const RefreshToken = model<IRefreshToken>('refresh_tokens', RefreshTokenSchema);
