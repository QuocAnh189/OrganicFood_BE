import HTTP_STATUS from '@/constants/httpStatus';
import { RateService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class RateController {
  public rate = Container.get(RateService);

  public getRate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const rate = await this.rate.getRate(id);

      res.status(HTTP_STATUS.OK).json(rate);
    } catch (error) {
      next(error);
    }
  };

  public getRates = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rate = await this.rate.getRates();

      res.status(HTTP_STATUS.OK).json(rate);
    } catch (error) {
      next(error);
    }
  };

  public createRate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const rate = await this.rate.createRate(data);

      res.status(HTTP_STATUS.CREATED).json(rate);
    } catch (error) {
      next(error);
    }
  };

  public updateRate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const rate = await this.rate.updateRate(data, id);

      res.status(HTTP_STATUS.OK).json(rate);
    } catch (error) {
      next(error);
    }
  };

  public deleteRate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.rate.deleteRate(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
