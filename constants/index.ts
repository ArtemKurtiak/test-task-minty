import { dbTablesEnum } from './dbTablesEnum';
import { statusCodesEnum } from './statusCodesEnum';

export const constants = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  dbTablesEnum,
  statusCodesEnum
};
