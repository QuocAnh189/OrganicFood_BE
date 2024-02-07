import { ObjectId } from 'mongodb';

export interface ISize {
  name: string;
  value: number;
}

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
  sizes: ISize[];
  stockQuantity: number;
  rates: ObjectId[];
  purchases: number;
  store: ObjectId;
}
