import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IVendor } from '@/interfaces';
import { Vendor } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class VendorService {
  public async getVendors(): Promise<IVendor[]> {
    try {
      const vendors = await Vendor.find();
      if (!vendors) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Vendors not found`);
      }
      return vendors;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getVendor(id: string): Promise<IVendor> {
    try {
      const vendor = await Vendor.findById(id);
      if (!vendor) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Vendor not found`);
      }
      return vendor;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createVendor(data: Partial<IVendor>): Promise<IVendor> {
    const newVendor = new Vendor(data);

    try {
      const vendor = await newVendor.save();
      return vendor;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateVendor(data: Partial<IVendor>, id: string): Promise<IVendor> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Vendor with id: ${id}`);
    }

    try {
      const updateVendor = await Vendor.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateVendor!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteVendor(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Vendor with id: ${id}`);
    }

    try {
      await Vendor.findByIdAndDelete(id);
      return 'Vendor deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
