import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IOrderItem } from '@/interfaces';
import { OrderItem } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class OrderItemService {
  public async getOrderItems(): Promise<IOrderItem[]> {
    try {
      const orderItems = await OrderItem.find();
      if (!orderItems) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `OrderItems not found`);
      }
      return orderItems;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getOrderItem(id: string): Promise<IOrderItem> {
    try {
      const orderItem = await OrderItem.findById(id);
      if (!orderItem) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `OrderItem not found`);
      }
      return orderItem;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createOrderItem(data: Partial<IOrderItem>): Promise<IOrderItem> {
    const newOrderItem = new OrderItem(data);

    try {
      const orderItem = await newOrderItem.save();
      return orderItem;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateOrderItem(data: Partial<IOrderItem>, id: string): Promise<IOrderItem> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No OrderItem with id: ${id}`);
    }

    try {
      const updateOrderItem = await OrderItem.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateOrderItem!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteOrderItem(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No OrderItem with id: ${id}`);
    }

    try {
      await OrderItem.findByIdAndDelete(id);
      return 'OrderItem deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
