import { ObjectId } from 'mongodb';

export interface IRefreshToken {
  _id?: ObjectId;
  user_id: ObjectId;
  token: string;
}
