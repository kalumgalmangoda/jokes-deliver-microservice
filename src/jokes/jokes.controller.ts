import { Controller, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get('random')
  getRandomJoke() {
    return this.jokesService.getRandomJoke();
  }

  @Get('types')
  getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }
}
