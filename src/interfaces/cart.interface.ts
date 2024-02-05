import { ObjectId } from 'mongodb';

export interface ICart {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  quantity: number;
}
