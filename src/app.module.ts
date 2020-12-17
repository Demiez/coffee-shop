import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { typeormConfigOptions } from './config/';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot(typeormConfigOptions as TypeOrmModuleOptions),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
