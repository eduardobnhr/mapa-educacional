/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CidadeService } from './service/cidade.service'; 
import { CidadeController } from './controller/cidade.controller';

@Module({
  controllers: [CidadeController],
  providers: [CidadeService],
})
export class CidadeModule {}
