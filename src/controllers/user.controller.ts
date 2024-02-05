import HTTP_STATUS from '@/constants/httpStatus';
import { UserService } from '@/services';
import { Request, Response, NextFunction } from 'express';
import Container from 'typedi';

export class UserController {
  public user = Container.get(UserService);

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.user.getUser(id);
      res.status(HTTP_STATUS.OK).json(user);
    } catch (error) {
      next(error);
    }
  };

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.user.getUsers();
      res.status(HTTP_STATUS.OK).json(users);
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const userData = req.body;
    try {
      const user = await this.user.updateUser(userData, id);
      res.status(HTTP_STATUS.OK).json(user);
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.user.deleteUser(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  //   public updateUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  //     const { id } = req.params;
  //     const userInfoData = req.body;
  //     try {
  //       const userInfo = await this.user.updateuserinfo(userInfoData, id);
  //       res.status(HTTP_STATUS.OK).json(userInfo);
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  //   public deleteAvatar = async (req: Request, res: Response, next: NextFunction) => {
  //     const { public_id } = req.body;
  //     try {
  //       const { result } = await this.user.deleteavatar(public_id);
  //       res.status(HTTP_STATUS.OK).json({ message: result });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}
