import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('/recommend-coffee/:id')
  @HttpCode(HttpStatus.OK)
  recommend(@Param('id') id: string) {
    return this.eventsService.recommendCoffee(id);
  }
}
