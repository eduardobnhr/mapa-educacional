/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'eduAdm',
  password: '1234',
  database: 'mapa-educacional',
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  synchronize: false, // Cuidado: use false em produção
};
