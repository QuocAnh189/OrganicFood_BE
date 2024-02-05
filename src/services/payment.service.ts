import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IPayment } from '@/interfaces';
import { Payment } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class PaymentService {
  public async getPayments(): Promise<IPayment[]> {
    try {
      const payments = await Payment.find();
      if (!payments) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Payments not found`);
      }
      return payments;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getPayment(id: string): Promise<IPayment> {
    try {
      const payment = await Payment.findById(id);
      if (!Payment) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Payment not found`);
      }
      return payment;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createPayment(data: Partial<IPayment>): Promise<IPayment> {
    const newPayment = new Payment(data);

    try {
      const payment = await newPayment.save();
      return payment;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updatePayment(data: Partial<IPayment>, id: string): Promise<IPayment> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Payment with id: ${id}`);
    }

    try {
      const updatePayment = await Payment.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatePayment!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deletePayment(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Payment with id: ${id}`);
    }

    try {
      await Payment.findByIdAndDelete(id);
      return 'Payment deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
