import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { IUser } from '@/interfaces';

//model
import { User } from '@/models';

@Service()
export class UserService {
  public async getUsers(): Promise<IUser[]> {
    try {
      const users = await User.find();
      if (!users) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Users not found`);
      }
      return users;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getUser(id: string): Promise<IUser> {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `User not found`);
      }
      return user;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createUser(data: Partial<IUser>): Promise<IUser> {
    const existsEmail = await User.findOne({
      email: data.email,
    });
    if (existsEmail) {
      throw new HttpException(HTTP_STATUS.UNPROCESSABLE_ENTITY, `Email already exists`);
    }

    const existsName = await User.findOne({
      name: data.name,
    });
    if (existsName) {
      throw new HttpException(HTTP_STATUS.UNPROCESSABLE_ENTITY, `User already exists`);
    }

    const newUser = new User(data);

    try {
      const user = await newUser.save();
      return user;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateUser(data: Partial<IUser>, id: string): Promise<IUser> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No User with id: ${id}`);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateUser!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteUser(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No user with id: ${id}`);
    }

    try {
      await User.findByIdAndDelete(id);
      return 'User deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
