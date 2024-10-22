/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CidadeController } from '../controller/cidade.controller';
import { CidadeService } from '../service/cidade.service'; 

describe('CidadeController', () => {
  let controller: CidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CidadeController],
      providers: [CidadeService],
    }).compile();

    controller = module.get<CidadeController>(CidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
