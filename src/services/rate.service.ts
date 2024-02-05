import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IRate } from '@/interfaces';
import { Rate } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class RateService {
  public async getRates(): Promise<IRate[]> {
    try {
      const rates = await Rate.find();
      if (!rates) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Rates not found`);
      }
      return rates;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getRate(id: string): Promise<IRate> {
    try {
      const rate = await Rate.findById(id);
      if (!rate) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Rate not found`);
      }
      return rate;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createRate(data: Partial<IRate>): Promise<IRate> {
    const newRate = new Rate(data);

    try {
      const Rate = await newRate.save();
      return Rate;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateRate(data: Partial<IRate>, id: string): Promise<IRate> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Rate with id: ${id}`);
    }

    try {
      const updateRate = await Rate.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateRate!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteRate(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Rate with id: ${id}`);
    }

    try {
      await Rate.findByIdAndDelete(id);
      return 'Rate deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
