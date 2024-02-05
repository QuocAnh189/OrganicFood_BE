import HTTP_STATUS from '@/constants/httpStatus';
import { VoucherService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class VoucherController {
  public voucher = Container.get(VoucherService);

  public getVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const voucher = await this.voucher.getVoucher(id);

      res.status(HTTP_STATUS.OK).json(voucher);
    } catch (error) {
      next(error);
    }
  };

  public getVouchers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const voucher = await this.voucher.getVouchers();

      res.status(HTTP_STATUS.OK).json(voucher);
    } catch (error) {
      next(error);
    }
  };

  public createVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const voucher = await this.voucher.createVoucher(data);

      res.status(HTTP_STATUS.CREATED).json(voucher);
    } catch (error) {
      next(error);
    }
  };

  public updateVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const voucher = await this.voucher.updateVoucher(data, id);

      res.status(HTTP_STATUS.OK).json(voucher);
    } catch (error) {
      next(error);
    }
  };

  public deleteVoucher = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.voucher.deleteVoucher(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
