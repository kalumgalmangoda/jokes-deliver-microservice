import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokeType } from './entities/jokes-types.entity';
import { Joke } from './entities/jokes.entity';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get('random')
  async getRandomJoke(@Query('type') type: string): Promise<Joke> {
    return this.jokesService.getRandomJoke(type);
  }

  @Get('types')
  async getJokeTypes(): Promise<JokeType[]> {
    return this.jokesService.getJokeTypes();
  }

  @Post()
  async create(@Body() createJokeDto: { content: string; type: string }) {
    return this.jokesService.create(createJokeDto.content, createJokeDto.type);
  }

  //   @Get('random')
  //   getRandomJoke() {
  //     return this.jokesService.getRandomJoke();
  //   }

  //   @Get('types')
  //   getJokeTypes() {
  //     return this.jokesService.getJokeTypes();
  //   }
}
