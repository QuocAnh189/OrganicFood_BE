import { ObjectId } from 'mongodb';

interface IRole {
  _id?: ObjectId;
  name: string;
}

export { IRole };
