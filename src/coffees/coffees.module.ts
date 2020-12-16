import { Module } from '@nestjs/common';
import { CoffeesService } from './services/coffees.service';
import { CoffeesController } from './contollers/coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee, Flavor } from './entities';
import { Event } from '../events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
