import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './entities/jokes.entity';
import { JokeType } from './entities/jokes-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Joke, JokeType])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
