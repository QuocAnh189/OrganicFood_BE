import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class ProductService {
  public async getProducts(): Promise<IProduct[]> {
    try {
      const products = await Product.find();
      if (!products) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Products not found`);
      }
      return products;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getProduct(id: string): Promise<IProduct> {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Product not found`);
      }
      return product;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createProduct(data: Partial<IProduct>): Promise<IProduct> {
    const newProduct = new Product(data);

    try {
      const Product = await newProduct.save();
      return Product;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateProduct(data: Partial<IProduct>, id: string): Promise<IProduct> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Product with id: ${id}`);
    }

    try {
      const updateProduct = await Product.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateProduct!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteProduct(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Product with id: ${id}`);
    }

    try {
      await Product.findByIdAndDelete(id);
      return 'Product deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
