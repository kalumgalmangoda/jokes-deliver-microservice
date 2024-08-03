import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JokeType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
