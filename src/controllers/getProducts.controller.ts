import { Request, ResponseToolkit } from '@hapi/hapi';
import { Product } from 'src/models/Product';
import { productsService } from '../services/products.service';

declare interface ReturnedObjectJSON {
  code: number;
  message: string;
}

declare interface ReturnedProductObject extends ReturnedObjectJSON {
  products?: Product[];
}

export class ProductsController {
  //Get all products
  async getAll(
    req: Request,
    res: ResponseToolkit,
  ): Promise<ReturnedProductObject> {
    try {
      const getProducts = await productsService.getAllProducts();
      return {
        code: 200,
        message: 'OK',
        products: getProducts,
      };
    } catch (error) {
      return {
        code: 400,
        message: 'BAD_REQUEST',
      };
    }
  }
  //get products by category
  async getProductsByCategory(
    req: Request,
    res: ResponseToolkit,
  ): Promise<ReturnedProductObject> {
    //we receive the category from req.params
    const { category } = req.params;
    try {
      const getByCategory = await productsService.getProductByCategory(
        category,
      );
      return {
        code: 200,
        message: 'OK',
        products: getByCategory,
      };
    } catch (error) {
      return {
        code: 400,
        message: 'BAD_REQUEST',
      };
    }
  }
  //get products with name
  async getProductsByAttributes(
    req: Request,
    res: ResponseToolkit,
  ): Promise<ReturnedProductObject> {
    const query = req.query;
    const { name = '', price = '', discount = '' } = query;
    let data = {
      name,
      price,
      discount,
    };
    try {
      const getByAttributes = await productsService.getProductsByAttributes(
        data,
      );
      return {
        code: 200,
        message: 'OK',
        products: getByAttributes,
      };
    } catch (error) {
      return {
        code: 400,
        message: 'BAD_REQUEST',
      };
    }
  }
}

export const productosController = new ProductsController();
