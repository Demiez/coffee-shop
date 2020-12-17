import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './controllers/events.controller';
import { EventsService } from './services/events.service';
import { CoffeesModule } from '../coffees/coffees.module';
// import { CoffeesService } from '../coffees/services/coffees.service';
import { Event } from './entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), CoffeesModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
