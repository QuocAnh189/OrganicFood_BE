import HTTP_STATUS from '@/constants/httpStatus';
import { StoreService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class storeController {
  public store = Container.get(StoreService);

  public getStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const store = await this.store.getStore(id);

      res.status(HTTP_STATUS.OK).json(store);
    } catch (error) {
      next(error);
    }
  };

  public getStores = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const store = await this.store.getStores();

      res.status(HTTP_STATUS.OK).json(store);
    } catch (error) {
      next(error);
    }
  };

  public createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const store = await this.store.createStore(data);

      res.status(HTTP_STATUS.CREATED).json(store);
    } catch (error) {
      next(error);
    }
  };

  public updateStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const store = await this.store.updateStore(data, id);

      res.status(HTTP_STATUS.OK).json(store);
    } catch (error) {
      next(error);
    }
  };

  public deleteStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.store.deleteStore(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
