import { Request, ResponseToolkit } from '@hapi/hapi';
import { categoryService } from '../services/category.service';
import { Category } from '../models/Category';

declare interface ReturnedProductObject {
  code: number;
  message: string;
  category?: Category[];
}

export class CategoryController {
  async getAll(
    req: Request,
    res: ResponseToolkit,
  ): Promise<ReturnedProductObject> {
    try {
      const getCategory = await categoryService.getAllCategory();
      return {
        code: 200,
        message: 'OK',
        category: getCategory,
      };
    } catch (error) {
      return {
        code: 400,
        message: 'BAD_REQUEST',
      };
    }
  }
}

export const categoryController = new CategoryController();
