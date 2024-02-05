import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions/httpException';
import { ICategory } from '@/interfaces';
import { Category } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class CategoryService {
  public async getCategories(): Promise<ICategory[]> {
    try {
      const categories = await Category.find();
      if (!categories) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Categories not found`);
      }
      return categories;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getCategory(id: string): Promise<ICategory> {
    try {
      const category = await Category.findById(id);
      if (!category) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Category not found`);
      }
      return category;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createCategory(data: Partial<ICategory>): Promise<ICategory> {
    const newCategory = new Category(data);

    try {
      const category = await newCategory.save();
      return category;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateCategory(data: Partial<ICategory>, id: string): Promise<ICategory> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Category with id: ${id}`);
    }

    try {
      const updateCategory = await Category.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updateCategory!;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteCategory(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No Category with id: ${id}`);
    }

    try {
      await Category.findByIdAndDelete(id);
      return 'Category deleted successfully!';
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
