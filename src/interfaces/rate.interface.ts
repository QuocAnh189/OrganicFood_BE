import { ObjectId } from 'mongodb';

export interface IRate {
  _id: ObjectId;
  userId: ObjectId;
  rate: number;
  comment: string;
}
