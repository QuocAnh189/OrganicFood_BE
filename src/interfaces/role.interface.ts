import { ObjectId } from 'mongodb';

export interface IRole {
  _id?: ObjectId;
  name: string;
}
