import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//service
import { CartService } from '@/services';

export class CartController {
  public cart = Container.get(CartService);

  public getCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const cart = await this.cart.getCart(id);

      res.status(HTTP_STATUS.OK).json(cart);
    } catch (error) {
      next(error);
    }
  };

  public getCarts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cart = await this.cart.getCarts();

      res.status(HTTP_STATUS.OK).json(cart);
    } catch (error) {
      next(error);
    }
  };

  public createCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const cart = await this.cart.createCart(data);

      res.status(HTTP_STATUS.CREATED).json(cart);
    } catch (error) {
      next(error);
    }
  };

  public updateCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const cart = await this.cart.updateCart(data, id);

      res.status(HTTP_STATUS.OK).json(cart);
    } catch (error) {
      next(error);
    }
  };
  public deleteCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.cart.deleteCart(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
