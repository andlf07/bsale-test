import { DBConfig } from './DBConfig';
import { config } from '../config';

//Here is the config for the DB, we provide all the data we need to connect HOST, USER, PASSWORD.
export class DBClientConfig {
  static createConfig(): DBConfig {
    return {
      pool: {
        max: 5,
        min: 0,
        idle: 300,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      dialect: 'mysql',
      host: `${config.DB_HOST}`,
      // port: config.DB_PORT,
      username: `${config.DB_USER}`,
      password: `${config.DB_PASSWORD}`,
      database: `${config.DB_NAME}`,
    };
  }
}
