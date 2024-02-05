import { ObjectId } from 'mongodb';

export interface IOrder {
  _id: ObjectId;
  userId: ObjectId;
  address: ObjectId;
  orderItems: ObjectId[];
  totalValue: number;
  status: string;
  payment: ObjectId;
  paid: boolean;
  ship: ObjectId;
}