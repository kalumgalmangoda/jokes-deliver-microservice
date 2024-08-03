import { Injectable } from '@nestjs/common';

@Injectable()
export class JokesService {
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

  getRandomJoke(): any {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    return this.jokes[randomIndex];
  }

  getJokeTypes(): string[] {
    const types = this.jokes.map((joke) => joke.type);
    return Array.from(new Set(types)); // Return unique joke types
  }
}
