import { categoryController } from '../controllers/category.controller';

//Here we made the routes for category
const API_VERSION: string = '/api/category';

module.exports = [
  {
    //Here we will get all the category
    method: 'GET',
    path: `${API_VERSION}`,
    handler: categoryController.getAll,
  },
];
