import { dbClient } from './DBClient';

export class DBManager {
  async connectDB(): Promise<void> {
    try {
      await dbClient.init();
    } catch (error) {
      throw new Error('Something wrong on DB connection');
    }
  }

  async reOpenDB(): Promise<void> {
    try {
      await dbClient.openDB();
    } catch (error) {
      throw new Error('Something wrong reOpening DB');
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

export const dbManager = new DBManager();
