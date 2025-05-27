import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CreateBookDto } from 'src/book/DTOs/create-book-dto';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}

  async create(dto: CreateBookDto): Promise<Book> {
    const book = this.repo.create(dto);
    return await this.repo.save(book);
  }
  findAll() {
    return this.repo.find();
  }
}
