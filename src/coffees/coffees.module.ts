import { Module } from '@nestjs/common';
import { CoffeesService } from './services/coffees.service';
import { CoffeesController } from './contollers/coffees.controller';

@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
