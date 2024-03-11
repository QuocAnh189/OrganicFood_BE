import { Router } from 'express';

//controller
import { AuthController } from '@/controllers';

//dto
import { SignInUserDto, RefreshTokenDto, SignUpUserDto, SignOutDto } from '@/dtos';

//interface
import { IRoutes } from '@/interfaces';

//middleware
import { ValidationMiddleware } from '@/middlewares';

//util
import { wrapRequestHandler } from '@/utils';

class AuthRoute implements IRoutes {
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @openapi
     * '/auth/signup':
     *  post:
     *     tags:
     *     - Auth
     *     summary: Register a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.post('/signup', ValidationMiddleware(SignUpUserDto), wrapRequestHandler(this.auth.signUp));

    /**
     * @openapi
     * /auth/signin:
     *  post:
     *     tags:
     *     - Auth
     *     summary: Login to system
     *     requestBody:
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/LoginDto'
     *     responses:
     *      200:
     *        description: Success
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     */
    this.router.post('/signin', ValidationMiddleware(SignInUserDto), wrapRequestHandler(this.auth.signIn));

    /**
     * @openapi
     * /auth/refresh:
     *  post:
     *     tags:
     *     - Auth
     *     summary: Refresh token
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/RefreshTokenDto'
     *     responses:
     *      200:
     *        description: Success
     *      403:
     *        description: Forbidden
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     */
    this.router.post('/refresh', ValidationMiddleware(RefreshTokenDto), wrapRequestHandler(this.auth.refreshToken));

    /**
     * @openapi
     * /auth/signout:
     *  post:
     *     tags:
     *     - Auth
     *     summary: Login to system
     *     requestBody:
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/LoginDto'
     *     responses:
     *      200:
     *        description: Success
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     */
    this.router.post('/signout/:id', ValidationMiddleware(SignOutDto), wrapRequestHandler(this.auth.signOut));
  }
}

export default AuthRoute;
