import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IVoucher } from '@/interfaces';
import { Voucher } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class VoucherService {
  public async getVouchers(): Promise<IVoucher[]> {
    try {
      const vouchers = await Voucher.find();
      if (!vouchers) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Vouchers not found`);
      }
      return vouchers;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getVoucher(id: string): Promise<IVoucher> {
    try {
      const voucher = await Voucher.findById(id);
      if (!voucher) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Voucher not found`);
      }
      return voucher;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createVoucher(data: Partial<IVoucher>): Promise<IVoucher> {
    const newVoucher = new Voucher(data);

    try {
      const Voucher = await newVoucher.save();
      return Voucher;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateVoucher(data: Partial<IVoucher>, id: string): Promise<IVoucher> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Voucher with id: ${id}`);
    }

    try {
      const updateVoucher = await Voucher.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateVoucher!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteVoucher(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Voucher with id: ${id}`);
    }

    try {
      await Voucher.findByIdAndDelete(id);
      return 'Voucher deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
