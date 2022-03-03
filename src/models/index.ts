import { Sequelize } from 'sequelize';
import { CategoryInitializer } from './Category';
import { ProductsInitializer } from './Product';

//Here we register our models in our DB
export const registerModels = (client: Sequelize) => {
  new ProductsInitializer(client).initialize();
  new CategoryInitializer(client).initialize();
};
