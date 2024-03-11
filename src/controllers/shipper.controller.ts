import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//service
import { ShipperService } from '@/services';

export class ShipperController {
  public shipper = Container.get(ShipperService);

  public getShipper = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const shipper = await this.shipper.getShipper(id);

      res.status(HTTP_STATUS.OK).json(shipper);
    } catch (error) {
      next(error);
    }
  };

  public getShippers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const shipper = await this.shipper.getShippers();

      res.status(HTTP_STATUS.OK).json(shipper);
    } catch (error) {
      next(error);
    }
  };

  public createShipper = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const shipper = await this.shipper.createShipper(data);

      res.status(HTTP_STATUS.CREATED).json(shipper);
    } catch (error) {
      next(error);
    }
  };

  public updateShipper = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const shipper = await this.shipper.updateShipper(data, id);

      res.status(HTTP_STATUS.OK).json(shipper);
    } catch (error) {
      next(error);
    }
  };

  public deleteShipper = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.shipper.deleteShipper(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
