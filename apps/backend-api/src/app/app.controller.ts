import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBooks() {
    return this.appService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: number) {
    return this.appService.getBook(id);
  }
}
