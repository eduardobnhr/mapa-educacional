/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service'; 
import { CreateUsuarioDto } from '../model/entities/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../model/entities/dto/update-usuario.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Usuario } from '../model/entities/usuario.entity';

@ApiTags('usuario')  // Swagger documentation for this controller
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(createUsuarioDto);
  }


  @Get()
  @ApiResponse({ status: 200, description: 'Retorna todos os usuários.' })
  @ApiResponse({ status: 500, description: 'Erro ao buscar usuários.' }) 
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.todosUsuarios();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retorna usuario por id.' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.usuarioId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.atualizaUsuario(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Usuário removido com sucesso.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.usuarioService.removerUsuario(id);
  }
}
