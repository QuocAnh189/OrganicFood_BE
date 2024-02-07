import { ObjectId } from 'mongodb';

export interface IPayment {
  _id?: ObjectId;
  method: string;
  numberCart?: string;
  totalValue: number;
}
