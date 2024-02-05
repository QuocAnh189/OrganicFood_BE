import HTTP_STATUS from '@/constants/httpStatus';
import { ProductService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class ProductController {
  public product = Container.get(ProductService);

  public getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = await this.product.getProduct(id);

      res.status(HTTP_STATUS.OK).json(product);
    } catch (error) {
      next(error);
    }
  };

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await this.product.getProducts();

      res.status(HTTP_STATUS.OK).json(product);
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const product = await this.product.createProduct(data);

      res.status(HTTP_STATUS.CREATED).json(product);
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const product = await this.product.updateProduct(data, id);

      res.status(HTTP_STATUS.OK).json(product);
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.product.deleteProduct(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
