import { dbManager, DBManager } from '../db/DBManager';
import { Category } from '../models/Category';

//this will be the service for produtcs controller
export class CategoryService {
  async getAllCategory(): Promise<Array<Category>> {
    try {
      const getAll = await Category.findAll();
      return getAll;
    } catch (error) {
      console.log(error);
      throw new Error('Error getting all products');
    }
  }
  //This method will return one category we must have to provide the name of the category
  async getOneCategory(category: string): Promise<Category> {
    try {
      const getOne = await Category.findOne({ where: { name: category } });
      return getOne;
    } catch (error) {
      throw new error('Error to get one category');
    }
  }
}

export const categoryService = new CategoryService();
