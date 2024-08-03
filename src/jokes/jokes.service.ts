import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JokeType } from './entities/jokes-types.entity';
import { Joke } from './entities/jokes.entity';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke)
    private jokesRepository: Repository<Joke>,
    @InjectRepository(JokeType)
    private jokeTypesRepository: Repository<JokeType>,
  ) {}
  private readonly jokes = [
    {
      id: 1,
      type: 'general',
      content:
        'Why don’t scientists trust atoms? Because they make up everything!',
    },
    {
      id: 2,
      type: 'programming',
      content:
        'Why do programmers prefer dark mode? Because light attracts bugs.',
    },
    // Add more jokes here
  ];

  async getRandomJoke(type: string): Promise<Joke> {
    const jokeType = await this.jokeTypesRepository.findOne({
      where: { type },
    });

    if (!jokeType) {
      throw new Error('Joke type not found');
    }

    const jokes = await this.jokesRepository.find({
      where: { type: jokeType },
    });
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  async getJokeTypes(): Promise<JokeType[]> {
    return this.jokeTypesRepository.find();
  }

  async create(content: string, type: string): Promise<Joke> {
    // Check if the joke type exists, and create it if it doesn't
    let jokeType = await this.jokeTypesRepository.findOne({ where: { type } });
    if (!jokeType) {
      jokeType = this.jokeTypesRepository.create({ type });
      await this.jokeTypesRepository.save(jokeType);
    }

    const joke = this.jokesRepository.create({
      content,
      type: jokeType,
    });
    return this.jokesRepository.save(joke);
  }

  //   getRandomJoke(): any {
  //     const randomIndex = Math.floor(Math.random() * this.jokes.length);
  //     return this.jokes[randomIndex];
  //   }

  //   getJokeTypes(): string[] {
  //     const types = this.jokes.map((joke) => joke.type);
  //     return Array.from(new Set(types)); // Return unique joke types
  //   }
}
