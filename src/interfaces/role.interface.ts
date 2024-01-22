import { ObjectId } from 'mongodb';

interface IRole {
  _id?: ObjectId;
  roleId: ObjectId;
  userId: ObjectId;
}

interface IRoleType {
  _id?: ObjectId;
  name: string;
}

export { IRole, IRoleType };
