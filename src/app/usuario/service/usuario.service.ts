/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from '../model/entities/dto/create-usuario.dto'; 
import { UpdateUsuarioDto } from '../model/entities/dto/update-usuario.dto';
import { Usuario } from '../model/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject(Usuario)
    private usuarioRepository: Repository<Usuario>, 
  ) {}


  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      return await this.usuarioRepository.save(usuario);
    } catch (error) {
      throw new HttpException('Erro ao criar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async todosUsuarios(): Promise<Usuario[]>{
    try {
      const usuarios = await this.todosUsuarios();
      if(!usuarios){
        throw new HttpException('Usuarios não encontrados', HttpStatus.NOT_FOUND);
      }
      return usuarios;
    } catch (error) {
      throw new HttpException('Erro ao buscar usuários', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async usuarioId(id: number): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOne({ where: { id } });
      if (!usuario) {
        throw new HttpException(`Usuário com ID ${id} não encontrado`, HttpStatus.NOT_FOUND);
      }
      return usuario;
    } catch (error) {
      throw new HttpException('Erro ao buscar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async atualizaUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    try {
      const usuario = await this.usuarioId(id); 
      await this.usuarioRepository.update(id, updateUsuarioDto);
      return { ...usuario,
              ...updateUsuarioDto }; 
    } catch (error) {
      throw new HttpException('Erro ao atualizar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removerUsuario(id: number): Promise<void> {
    try {
      const usuario = await this.usuarioId(id); 
      await this.usuarioRepository.delete(id);
    } catch (error) {
      throw new HttpException('Erro ao remover usuário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
