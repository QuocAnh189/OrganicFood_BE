import { ObjectId } from 'mongodb';
import { ERole } from './auth.interface';

export interface IUser {
  _id?: ObjectId;
  email: string;
  avatar: string;
  firstname: string;
  lastname: string;
  fullname: string;
  phone: string;
  password: string;
  dob: Date;
  isActive: boolean;
  refreshToken?: string;
  role: ERole;
}
