import { productosController } from '../controllers/getProducts.controller';

//Here we made the routes for produts
const API_VERSION: string = '/api/products';

module.exports = [
  {
    //Here we will get all the products
    method: 'GET',
    path: `${API_VERSION}`,
    handler: productosController.getAll,
  },
  {
    //get products by category
    method: 'GET',
    path: `${API_VERSION}/{category}`,
    handler: productosController.getProductsByCategory,
  },
  {
    //get products by attributes
    method: 'GET',
    path: `${API_VERSION}/attributes`,
    handler: productosController.getProductsByAttributes,
  },
];
