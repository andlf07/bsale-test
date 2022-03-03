import { Product } from '../models/Product';
import { categoryService } from './category.service';

//this will be the service for produtcs controller
export class ProductsService {
  //This method will get all the products
  async getAllProducts(): Promise<Array<Product>> {
    try {
      const getAll = await Product.findAll();
      return getAll;
    } catch (error) {
      throw new Error('Error getting all products');
    }
  }
  //This method will get products by category, first we recieve the category as string and search in the category table get the id and after we will search in product table with the category id
  async getProductByCategory(category: string): Promise<Array<Product>> {
    try {
      const getCategory = await categoryService.getOneCategory(category);
      const { id, name } = getCategory;
      const getProducts = await Product.findAll({ where: { category: id } });
      return getProducts;
    } catch (error) {
      throw new Error('Error getting products by category');
    }
  }
}

export const productsService = new ProductsService();
