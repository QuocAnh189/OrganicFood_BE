import { ObjectId } from 'mongodb';

export interface IRate {
  _id?: ObjectId;
  user: ObjectId;
  rate: number;
  comment: string;
}
