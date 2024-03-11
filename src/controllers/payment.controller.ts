import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//service
import { PaymentService } from '@/services';

export class PaymentController {
  public payment = Container.get(PaymentService);

  public getPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const payment = await this.payment.getPayment(id);

      res.status(HTTP_STATUS.OK).json(payment);
    } catch (error) {
      next(error);
    }
  };

  public getPayments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payment = await this.payment.getPayments();

      res.status(HTTP_STATUS.OK).json(payment);
    } catch (error) {
      next(error);
    }
  };

  public createPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const payment = await this.payment.createPayment(data);

      res.status(HTTP_STATUS.CREATED).json(payment);
    } catch (error) {
      next(error);
    }
  };

  public updatePayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const payment = await this.payment.updatePayment(data, id);

      res.status(HTTP_STATUS.OK).json(payment);
    } catch (error) {
      next(error);
    }
  };

  public deletePayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.payment.deletePayment(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
