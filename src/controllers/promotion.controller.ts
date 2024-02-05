import HTTP_STATUS from '@/constants/httpStatus';
import { PromotionService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class promotionController {
  public promotion = Container.get(PromotionService);

  public getPromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const promotion = await this.promotion.getPromotion(id);

      res.status(HTTP_STATUS.OK).json(promotion);
    } catch (error) {
      next(error);
    }
  };

  public getPromotions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const promotion = await this.promotion.getPromotions();

      res.status(HTTP_STATUS.OK).json(promotion);
    } catch (error) {
      next(error);
    }
  };

  public createPromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const promotion = await this.promotion.createPromotion(data);

      res.status(HTTP_STATUS.CREATED).json(promotion);
    } catch (error) {
      next(error);
    }
  };

  public updatePromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const promotion = await this.promotion.updatePromotion(data, id);

      res.status(HTTP_STATUS.OK).json(promotion);
    } catch (error) {
      next(error);
    }
  };

  public deletePromotion = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.promotion.deletePromotion(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
