/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CidadeService } from '../service/cidade.service'; 
import { CreateCidadeDto } from '../model/dto/create-cidade.dto';
import { UpdateCidadeDto } from '../model/dto/update-cidade.dto';

@Controller('cidade')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Post()
  create(@Body() createCidadeDto: CreateCidadeDto) {
    return this.cidadeService.create(createCidadeDto);
  }

  @Get()
  findAll() {
    return this.cidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cidadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCidadeDto: UpdateCidadeDto) {
    return this.cidadeService.update(+id, updateCidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cidadeService.remove(+id);
  }
}
