import { Module } from '@nestjs/common';
import { CoffeesService } from './services/coffees.service';
import { CoffeesController } from './contollers/coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee, Flavor } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
