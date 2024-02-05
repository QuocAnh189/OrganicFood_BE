import { ObjectId } from 'mongodb';

export interface IPromotion {
  _id: ObjectId;
  name: string;
  description: string;
  discount: number;
  status: boolean;
}
