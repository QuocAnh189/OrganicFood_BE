import HTTP_STATUS from '@/constants/httpStatus';
import { AddressService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class AddressController {
  public address = Container.get(AddressService);

  public getAddress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const address = await this.address.getAddress(id);

      res.status(HTTP_STATUS.OK).json(address);
    } catch (error) {
      next(error);
    }
  };

  public getAddresses = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const addresses = await this.address.getAddresses();

      res.status(HTTP_STATUS.OK).json(addresses);
    } catch (error) {
      next(error);
    }
  };

  public createAddress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const address = await this.address.createAddress(data);

      res.status(HTTP_STATUS.CREATED).json(address);
    } catch (error) {
      next(error);
    }
  };

  public updateAddress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const address = await this.address.updateAddress(data, id);

      res.status(HTTP_STATUS.OK).json(address);
    } catch (error) {
      next(error);
    }
  };

  public deleteAddress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.address.deleteAddress(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
