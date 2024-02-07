import { ObjectId } from 'mongodb';

export interface IOrderItem {
  _id?: ObjectId;
  cart: ObjectId;
  totalValue: number;
}
