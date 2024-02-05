import { ObjectId } from 'mongodb';

export interface IStore {
  _id: ObjectId;
  name: string;
  image: string;
  description: string;
  address: ObjectId;
  voucher: ObjectId[];
}
