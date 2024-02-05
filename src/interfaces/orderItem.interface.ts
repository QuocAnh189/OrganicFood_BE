import { ObjectId } from 'mongodb';

export interface IOrderItem {
  _id?: ObjectId;
  cartId: ObjectId;
  totalValue: number;
}
