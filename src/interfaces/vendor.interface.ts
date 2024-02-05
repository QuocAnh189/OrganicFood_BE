import { ObjectId } from 'mongodb';

export interface IVendor {
  _id: ObjectId;
  name: string;
  image: string;
  email: string;
  address: ObjectId;
}
