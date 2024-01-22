import { ObjectId } from 'mongodb';
import { ERole } from './auth.interface';

export interface IUser {
  _id?: ObjectId;
  firstname: string;
  lastname: string;
  phone: string;
  avatar: string;
  email: string;
  password: string;
  dob: Date;
  isActive: boolean;
  refreshToken?: string;
  role: ERole;
}
