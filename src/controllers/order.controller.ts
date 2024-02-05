import HTTP_STATUS from '@/constants/httpStatus';
import { OrderService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class OrderController {
  public order = Container.get(OrderService);

  public getOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const order = await this.order.getOrder(id);

      res.status(HTTP_STATUS.OK).json(order);
    } catch (error) {
      next(error);
    }
  };

  public getOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const order = await this.order.getOrders();

      res.status(HTTP_STATUS.OK).json(order);
    } catch (error) {
      next(error);
    }
  };

  public createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const order = await this.order.createOrder(data);

      res.status(HTTP_STATUS.CREATED).json(order);
    } catch (error) {
      next(error);
    }
  };

  public updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const order = await this.order.updateOrder(data, id);

      res.status(HTTP_STATUS.OK).json(order);
    } catch (error) {
      next(error);
    }
  };

  public deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.order.deleteOrder(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
