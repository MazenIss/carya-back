import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig : TypeOrmModuleOptions = {
  host: `${process.env.POSTGRES_HOST}`,
  port: +process.env.POSTGRES_PORT,
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DB}`,
  type: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
}

export default typeOrmConfig;
