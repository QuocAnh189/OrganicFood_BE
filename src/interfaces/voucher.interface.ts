import { ObjectId } from 'mongodb';

export interface IVoucher {
  _id?: ObjectId;
  name: string;
  description: string;
  minPrice: number;
  value: number;
}
