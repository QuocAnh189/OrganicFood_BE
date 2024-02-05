import HTTP_STATUS from '@/constants/httpStatus';
import { OrderItemService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class OrderItemController {
  public orderItem = Container.get(OrderItemService);

  public getOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const orderItem = await this.orderItem.getOrderItem(id);

      res.status(HTTP_STATUS.OK).json(orderItem);
    } catch (error) {
      next(error);
    }
  };

  public getOrderItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orderItem = await this.orderItem.getOrderItems();

      res.status(HTTP_STATUS.OK).json(orderItem);
    } catch (error) {
      next(error);
    }
  };

  public createOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const orderItem = await this.orderItem.createOrderItem(data);

      res.status(HTTP_STATUS.CREATED).json(orderItem);
    } catch (error) {
      next(error);
    }
  };

  public updateOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const orderItem = await this.orderItem.updateOrderItem(data, id);

      res.status(HTTP_STATUS.OK).json(orderItem);
    } catch (error) {
      next(error);
    }
  };

  public deleteOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.orderItem.deleteOrderItem(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
