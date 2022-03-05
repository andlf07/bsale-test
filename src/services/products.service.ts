import { Op } from 'sequelize';
import { dbManager, DBManager } from '../db/DBManager';
import { Product, ProductsAttributes } from '../models/Product';
import { categoryService } from './category.service';

//this will be the service for produtcs controller
export class ProductsService {
  //This method will get all the products
  async getAllProducts(): Promise<Array<Product>> {
    try {
      //Using findall will return a array of all register found
      const getAll = await Product.findAll();
      return getAll;
    } catch (error) {
      throw new Error('Error getting all products');
    }
  }
  //This method will get products by category, first we recieve the category as string and search in the category table get the id and after we will search in product table with the category id
  async getProductByCategory(category: string): Promise<Array<Product>> {
    try {
      //we need to pass category and get the id calling his service
      const getCategory = await categoryService.getOneCategory(category);
      const { id, name } = getCategory;
      //Find all products with the id of the category and return all of them
      const getProducts = await Product.findAll({ where: { category: id } });
      return getProducts;
    } catch (error) {
      throw new Error('Error getting products by category');
    }
  }
  async getProductsByAttributes(
    data: ProductsAttributes,
  ): Promise<Array<Product>> {
    try {
      const getByAttributes = await Product.findAll({
        where: {
          name: {
            [Op.startsWith]: data.name,
          },
          price: {
            [Op.gte]: data.price,
          },
          discount: {
            [Op.gte]: data.discount,
          },
        },
      });
      return getByAttributes;
    } catch (error) {
      throw new Error('Error getting products by attributes');
    }
  }
}

export const productsService = new ProductsService();
