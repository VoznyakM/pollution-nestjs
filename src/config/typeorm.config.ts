import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from "config";

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  port: process.env.RDS_PORT || dbConfig.port,
  "extra": {
    charset: "utf8mb4_unicode_ci"
  },
  entities: [
    __dirname + '/../**/**.entity.{js,ts}',
  ],
  synchronize: true,
}