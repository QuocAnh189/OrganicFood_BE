import { ObjectId } from 'mongodb';

export interface IShipper {
  _id: ObjectId;
  name: string;
  contact: string;
  deliveryTime: Date;
  address: ObjectId;
  rate: ObjectId;
}
