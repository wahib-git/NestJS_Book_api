import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from 'src/book/DTOs/create-book-dto';

@Controller('books')
export class BookController {
  constructor(private readonly service: BookService) {}
  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.service.create(dto);
  }
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
