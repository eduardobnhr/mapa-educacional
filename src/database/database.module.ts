/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';
import { Usuario } from 'src/app/usuario/model/entities/usuario.entity'; 
import { Cidade } from 'src/app/cidade/model/entities/cidade.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Usuario, Cidade]),
  ],
})
export class DatabaseModule {}