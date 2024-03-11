import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { IShipper } from '@/interfaces';

//model
import { Shipper } from '@/models';

@Service()
export class ShipperService {
  public async getShippers(): Promise<IShipper[]> {
    try {
      const shippers = await Shipper.find();
      if (!shippers) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Shippers not found`);
      }
      return shippers;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getShipper(id: string): Promise<IShipper> {
    try {
      const shipper = await Shipper.findById(id);
      if (!shipper) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Shipper not found`);
      }
      return shipper;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createShipper(data: Partial<IShipper>): Promise<IShipper> {
    const newShipper = new Shipper(data);

    try {
      const shipper = await newShipper.save();
      return shipper;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateShipper(data: Partial<IShipper>, id: string): Promise<IShipper> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Shipper with id: ${id}`);
    }

    try {
      const updateShipper = await Shipper.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateShipper!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteShipper(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Shipper with id: ${id}`);
    }

    try {
      await Shipper.findByIdAndDelete(id);
      return 'Shipper deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
