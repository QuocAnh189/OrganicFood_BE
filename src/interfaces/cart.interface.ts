import { ObjectId } from 'mongodb';

export interface ICart {
  _id?: ObjectId;
  user: ObjectId;
  product: ObjectId;
  quantity: number;
}
