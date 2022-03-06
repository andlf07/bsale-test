//We use this file config.ts to get all the variables of enviroment
import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  SERVER_PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
};
