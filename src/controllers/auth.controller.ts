import HTTP_STATUS from '@/constants/httpStatus';
import { SignUpUserDto, SignInUserDto, RefreshTokenDto } from '@/dtos';
import { ResponseDto } from '@/dtos/http.dto';
import { RequestWithUser } from '@/interfaces';
import { AuthRepository } from '@/services/auth.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class AuthController {
  public auth = Container.get(AuthRepository);

  public signUp = async (req: Request, res: Response<ResponseDto>, next: NextFunction) => {
    try {
      const userData: SignUpUserDto = req.body;
      const { token, signUpUserData } = await this.auth.signup(userData);

      res.status(HTTP_STATUS.CREATED).json({
        data: {
          user: signUpUserData,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
        status: HTTP_STATUS.CREATED,
        message: 'signup successfully!',
      });
    } catch (error) {
      next(error);
    }
  };

  public signIn = async (req: Request, res: Response<ResponseDto>, next: NextFunction) => {
    try {
      const userData: SignInUserDto = req.body;
      const { token, user } = await this.auth.signin(userData);

      res.status(HTTP_STATUS.OK).json({
        data: {
          user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
        status: HTTP_STATUS.OK,
        message: 'signin successfully!',
      });
    } catch (error) {
      next(error);
    }
  };

  public refreshToken = async (req: Request, res: Response<ResponseDto>, next: NextFunction) => {
    try {
      const tokenData: RefreshTokenDto = req.body;
      const refreshTokenData = await this.auth.refreshToken(tokenData);
      res.status(HTTP_STATUS.OK).json({
        data: refreshTokenData,
        status: HTTP_STATUS.OK,
        message: 'refresh successfully',
      });
    } catch (error) {
      next(error);
    }
  };

  public signOut = async (req: Request, res: Response<any>, next: NextFunction) => {
    try {
      const { id } = req.params;
      const message = await this.auth.signout(id);

      res.status(HTTP_STATUS.OK).json({
        message,
      });
    } catch (error) {
      next(error);
    }
  };

  public userRoute = async (req: RequestWithUser, res: Response<ResponseDto>, next: NextFunction) => {
    try {
      res.status(HTTP_STATUS.OK).json({
        data: req.user,
        status: HTTP_STATUS.OK,
        message: 'you have accessed user route!',
      });
    } catch (error) {
      next(error);
    }
  };

  public adminRoute = async (req: RequestWithUser, res: Response<ResponseDto>, next: NextFunction) => {
    try {
      res.status(HTTP_STATUS.OK).json({
        data: req.user,
        status: HTTP_STATUS.OK,
        message: 'you have accessed admin route!',
      });
    } catch (error) {
      next(error);
    }
  };
}
