import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';
// import { DBManager } from './db/DBManager';
const authStrategy = require('./plugins/authStrategy');

export class App {
  private host: string | undefined;
  private port: string;
  // private DB: DBManager;

  constructor(port: string) {
    this.port = port || '3001';
    this.host = '0.0.0.0';
    // this.DB = new DBManager();
  }

  async init(): Promise<Server> {
    const server: Server = Hapi.server({
      port: this.port,
      host: this.host,
      routes: {
        cors: true,
      },
    });
    await this.DB.connectDB();
    return server;
  }

  async start(): Promise<void> {
    let server = await this.init();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);

    return await server.start();
  }
}
