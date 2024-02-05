import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IPromotion } from '@/interfaces';
import { Promotion } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class PromotionService {
  public async getPromotions(): Promise<IPromotion[]> {
    try {
      const promotions = await Promotion.find();
      if (!promotions) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Promotions not found`);
      }
      return promotions;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getPromotion(id: string): Promise<IPromotion> {
    try {
      const promotion = await Promotion.findById(id);
      if (!promotion) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Promotion not found`);
      }
      return promotion;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createPromotion(data: Partial<IPromotion>): Promise<IPromotion> {
    const newPromotion = new Promotion(data);

    try {
      const Promotion = await newPromotion.save();
      return Promotion;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updatePromotion(data: Partial<IPromotion>, id: string): Promise<IPromotion> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Promotion with id: ${id}`);
    }

    try {
      const updatePromotion = await Promotion.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatePromotion!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deletePromotion(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Promotion with id: ${id}`);
    }

    try {
      await Promotion.findByIdAndDelete(id);
      return 'Promotion deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
