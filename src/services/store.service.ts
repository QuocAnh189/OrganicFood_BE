import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { IStore } from '@/interfaces';

//model
import { Store } from '@/models';

@Service()
export class StoreService {
  public async getStores(): Promise<IStore[]> {
    try {
      const stores = await Store.find();
      if (!stores) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Stores not found`);
      }
      return stores;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getStore(id: string): Promise<IStore> {
    try {
      const store = await Store.findById(id);
      if (!store) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Store not found`);
      }
      return store;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createStore(data: Partial<IStore>): Promise<IStore> {
    const newStore = new Store(data);

    try {
      const store = await newStore.save();
      return store;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateStore(data: Partial<IStore>, id: string): Promise<IStore> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Store with id: ${id}`);
    }

    try {
      const updateStore = await Store.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateStore!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteStore(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Store with id: ${id}`);
    }

    try {
      await Store.findByIdAndDelete(id);
      return 'Store deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
