import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { JokeType } from './jokes-types.entity';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => JokeType)
  @JoinColumn({ name: 'type_id' })
  type: JokeType;

  @Column('text')
  content: string;
}
