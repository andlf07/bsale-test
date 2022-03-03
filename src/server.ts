import { Server } from '@hapi/hapi';
import { DBManager } from './db/DBManager';
const Hapi = require('@hapi/hapi');

const PRODUCTS_ROUTES = require('./routes/products.routes');
const CATEGORY_ROUTES = require('./routes/category.routes');

//This is the Server  we initialize the server and the connection with the DB, we can provide the PORT and the host for the server
export class App {
  private host: string;
  private port: string;
  private DB: DBManager;

  constructor(port: string) {
    this.port = port || '4000';
    this.host = '0.0.0.0';
    this.DB = new DBManager();
  }

  //This method we initialize the Hapi Server using attributes from the constructor
  async init(): Promise<Server> {
    try {
      const server: Server = Hapi.server({
        port: this.port,
        host: this.host,
        routes: {
          cors: true,
        },
      });
      // const server = Hapi.server();
      // const server: Server = Hapi.server();

      await this.DB.connectDB();
      server.route(PRODUCTS_ROUTES);
      server.route(CATEGORY_ROUTES);
      return server;
    } catch (error) {
      console.log(error);
    }
  }

  //Here we start our sercer
  async start(): Promise<void> {
    let server = await this.init();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);

    return await server.start();
  }
}
