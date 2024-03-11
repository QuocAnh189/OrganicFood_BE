import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//service
import { VendorService } from '@/services';

export class VendorController {
  public vendor = Container.get(VendorService);

  public getVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const vendor = await this.vendor.getVendor(id);

      res.status(HTTP_STATUS.OK).json(vendor);
    } catch (error) {
      next(error);
    }
  };

  public getVendors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const vendor = await this.vendor.getVendors();

      res.status(HTTP_STATUS.OK).json(vendor);
    } catch (error) {
      next(error);
    }
  };

  public createVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const vendor = await this.vendor.createVendor(data);

      res.status(HTTP_STATUS.CREATED).json(vendor);
    } catch (error) {
      next(error);
    }
  };

  public updateVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const vendor = await this.vendor.updateVendor(data, id);

      res.status(HTTP_STATUS.OK).json(vendor);
    } catch (error) {
      next(error);
    }
  };

  public deleteVendor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.vendor.deleteVendor(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
