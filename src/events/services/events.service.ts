import { Injectable, NotFoundException } from '@nestjs/common';
import { CoffeesService } from '../../coffees/services/coffees.service';

@Injectable()
export class EventsService {
  constructor(private readonly coffeesService: CoffeesService) {}

  async recommendCoffee(id: string) {
    const coffee = await this.coffeesService.findOne(id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found for recommendation`);
    }

    return await this.coffeesService.recommendCoffee(coffee);
  }
}
