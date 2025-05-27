import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [
    // Configure TypeORM with MySQL connection
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Book],
      synchronize: true,
    }),

    // Uncomment the following lines to use SQLite instead of MySQL
    // TypeOrmModule.forRoot({
    //  type: 'sqlite',
    //  database: 'books.sqlite', // ← Nom du fichier (sera créé automatiquement)
    //  entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //  synchronize: true, // ← Crée les tables automatiquement
    //}), 

    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
