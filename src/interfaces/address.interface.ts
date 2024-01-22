import { ObjectId } from 'mongodb';

export interface IAddress {
  _id?: ObjectId;
  userId: ObjectId;
  name: string;
  country: string;
  city: string;
  district: string;
  code: string;
}
