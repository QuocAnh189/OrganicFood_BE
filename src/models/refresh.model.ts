import { Schema, model } from 'mongoose';

//schema
import { SCHEMA } from '../constants';

//interface
import { IRefreshToken } from '@/interfaces';

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
