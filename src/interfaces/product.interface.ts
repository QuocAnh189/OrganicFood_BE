import { ObjectId } from 'mongodb';

export interface IProduct {
  _id?: ObjectId;
  name: string;
  color: string;
  promotion: ObjectId;
  description: string;
  price: number;
  image: string;
  category: ObjectId;
  origin: string;
  sizes: ObjectId;
  stockQuantity: number;
  rates: ObjectId[];
  purchases: number;
  storeId: ObjectId;
}
