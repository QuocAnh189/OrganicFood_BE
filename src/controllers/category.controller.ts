import HTTP_STATUS from '@/constants/httpStatus';
import { CategoryService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class CategoryController {
  public category = Container.get(CategoryService);

  public getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const category = await this.category.getCategory(id);

      res.status(HTTP_STATUS.OK).json(category);
    } catch (error) {
      next(error);
    }
  };

  public getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.category.getCategories();

      res.status(HTTP_STATUS.OK).json(category);
    } catch (error) {
      next(error);
    }
  };

  public createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const category = await this.category.createCategory(data);

      res.status(HTTP_STATUS.CREATED).json(category);
    } catch (error) {
      next(error);
    }
  };

  public updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const category = await this.category.updateCategory(data, id);

      res.status(HTTP_STATUS.OK).json(category);
    } catch (error) {
      next(error);
    }
  };
  public deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.category.deleteCategory(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
