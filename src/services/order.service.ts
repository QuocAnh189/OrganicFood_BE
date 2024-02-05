import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IOrder } from '@/interfaces';
import { Order } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class OrderService {
  public async getOrders(): Promise<IOrder[]> {
    try {
      const orders = await Order.find();
      if (!orders) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Orders not found`);
      }
      return orders;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getOrder(id: string): Promise<IOrder> {
    try {
      const order = await Order.findById(id);
      if (!order) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Order not found`);
      }
      return order;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createOrder(data: Partial<IOrder>): Promise<IOrder> {
    const newOrder = new Order(data);

    try {
      const order = await newOrder.save();
      return order;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateOrder(data: Partial<IOrder>, id: string): Promise<IOrder> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Order with id: ${id}`);
    }

    try {
      const updateOrder = await Order.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateOrder!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteOrder(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Order with id: ${id}`);
    }

    try {
      await Order.findByIdAndDelete(id);
      return 'Order deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
