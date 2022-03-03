import { dbClient } from './DBClient';

export class DBManager {
  async connectDB(): Promise<void> {
    try {
      await dbClient.init();
    } catch (error) {
      throw new Error('Something wrong on DB connection');
    }
  }

  async closeDB(): Promise<void> {
    try {
      await dbClient.finish();
    } catch (error) {
      throw new Error('Something wrong on closing DB');
    }
  }
}
