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
    method: 'GET',
    path: `${API_VERSION}/{category}`,
    handler: productosController.getProductsByCategory,
  },
];
