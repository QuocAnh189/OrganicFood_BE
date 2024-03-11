import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { ICart } from '@/interfaces';

//model
import { Cart } from '@/models';

@Service()
export class CartService {
  public async getCarts(): Promise<ICart[]> {
    try {
      const carts = await Cart.find();
      if (!carts) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Categories not found`);
      }
      return carts;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getCart(id: string): Promise<ICart> {
    try {
      const cart = await Cart.findById(id);
      if (!cart) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Cart not found`);
      }
      return cart;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createCart(data: Partial<ICart>): Promise<ICart> {
    const newCart = new Cart(data);

    try {
      const cart = await newCart.save();
      return cart;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateCart(data: Partial<ICart>, id: string): Promise<ICart> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Cart with id: ${id}`);
    }

    try {
      const updateCart = await Cart.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateCart!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteCart(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Cart with id: ${id}`);
    }

    try {
      await Cart.findByIdAndDelete(id);
      return 'Cart deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
