import { ObjectId } from 'mongodb';

export interface IUser {
  _id?: ObjectId;
  email: string;
  name: string;
  avatar: string;
  phone: string;
  password: string;
  isActive: boolean;
  addresses: ObjectId;
  role: ObjectId;
}
