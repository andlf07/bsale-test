import { Sequelize } from 'sequelize';
import { DBConfig } from './DBConfig';
import { DBClientConfig } from './DBClientConfig';
import { ClientFactory } from './DBClientFactory';
import { registerModels } from '../models/index';

export class DBClient implements ClientFactory<Sequelize> {
  private client: Sequelize;

  constructor(config: DBConfig) {
    this.client = new Sequelize(config);
  }
  async init(): Promise<Sequelize> {
    try {
      await this.client
        .authenticate()
        .then(() => console.log('DB connection Open'));
      registerModels(this.client);
      return this.client;
      // return this.client.sync();
    } catch (error) {
      console.log(error);
      throw new Error('Error in DB');
    }
  }

  async openDB(): Promise<void> {
    try {
      return await this.client
        .authenticate({
          logging: false,
        })
        .then(() => console.log('DB open'));
    } catch (error) {
      throw new Error('Error opening DB');
    }
  }

  async finish(): Promise<void> {
    try {
      await this.client.close().then(() => console.log('DB connection closed'));
    } catch (error) {
      throw new Error('Error closing DB connectiong');
    }
  }
}

export const dbClient = new DBClient(DBClientConfig.createConfig());
