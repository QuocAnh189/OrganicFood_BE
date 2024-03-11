import { ObjectId } from 'mongodb';

export interface IUser {
  _id?: ObjectId;
  email: string;
  name: string;
  avatar: string;
  phone: string;
  gender: string;
  password: string;
  birthDay: Date;
  isActive: boolean;
  addresses: ObjectId[];
  role: ObjectId;
}
