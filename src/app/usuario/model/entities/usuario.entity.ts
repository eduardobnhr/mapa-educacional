/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 48 })
    nome: string;
  
    @Column({ length: 48, unique: true })
    email: string;
  
    @Column({ type: 'char', length: 1, nullable: true })
    sexo: 'F' | 'M' | null;
  
    @Column()
    id_cidade: number;
  
    @Column({ nullable: true })
    id_escola: number;

    @Column({ type: 'int', nullable: true })
    pontos: number;
  
    @Column({ type: 'date' })
    dt_nasc: Date;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    dt_cadastro: Date;

    /* @ManyToOne(() => Escola, escola => escola.usuarios, { nullable: true })
    @JoinColumn({ name: 'id_escola' })
    escola: Escola;

    @ManyToOne(() => Cidade, cidade => cidade.usuarios)
    @JoinColumn({ name: 'id_cidade' })
    cidade: Cidade; */
  }