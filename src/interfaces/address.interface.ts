import { ObjectId } from 'mongodb';

export interface IAddress {
  _id?: ObjectId;
  ownerId: ObjectId;
  country: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
}
