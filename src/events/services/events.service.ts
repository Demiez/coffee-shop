import {
  Injectable,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { Connection } from 'typeorm';
import { CoffeesService } from '../../coffees/services/coffees.service';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly connection: Connection,
  ) {}

  async recommendCoffee(id: string) {
    const coffee = await this.coffeesService.findOne(id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found for recommendation`);
    }

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      coffee.recommendations++;

      const recommendationEvent = new Event('coffee', 'recommend_coffee', {
        coffeeId: coffee.id,
      });

      await queryRunner.manager.save(coffee);
      await queryRunner.manager.save(recommendationEvent);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new PreconditionFailedException(
        `Failed to perform recommendation with coffee #${id}`,
      );
    } finally {
      await queryRunner.release();
    }
  }
}
