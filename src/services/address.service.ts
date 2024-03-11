import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

//exception
import { HttpException } from '@/exceptions/httpException';

//constant
import { HTTP_STATUS } from '@/constants';

//interface
import { IAddress } from '@/interfaces';

//model
import { Address } from '@/models';

@Service()
export class AddressService {
  public async getAddresses(): Promise<IAddress[]> {
    try {
      const address = await Address.find();
      if (!address) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Categories not found`);
      }
      return address;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getAddress(id: string): Promise<IAddress> {
    try {
      const address = await Address.findById(id);
      if (!address) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Address not found`);
      }
      return address;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createAddress(data: Partial<IAddress>): Promise<IAddress> {
    const newAddress = new Address(data);

    try {
      const address = await newAddress.save();
      return address;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateAddress(data: Partial<IAddress>, id: string): Promise<IAddress> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Address with id: ${id}`);
    }

    try {
      const updateAddress = await Address.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateAddress!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteAddress(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Address with id: ${id}`);
    }

    try {
      await Address.findByIdAndDelete(id);
      return 'Address deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
