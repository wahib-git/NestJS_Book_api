# Book API

A RESTful API for managing books, built with [NestJS](https://nestjs.com/) and TypeORM.

## Features

- Create and list books (title, author)
- TypeORM integration (MySQL by default, SQLite supported)
- Input validation with class-validator
- Swagger/OpenAPI documentation

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MySQL (or SQLite, see below)

### Installation

```bash
git clone https://github.com/wahib-git/NestJS_Book_api.git
cd NestJS_Book_api
npm install
```

### Configuration

By default, the API connects to a local MySQL database named `test` with user `root` and no password.  
You can change the database settings in `src/app.module.ts`.

To use SQLite instead, uncomment the SQLite section and comment out the MySQL section in `src/app.module.ts`.

### Running the Application

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production
npm run start:prod
```

The API will be available at [http://localhost:3000](http://localhost:3000).

### API Documentation

Swagger UI is available at [http://localhost:3000/api](http://localhost:3000/api).

## Usage

### Endpoints

- `GET /books` — List all books
- `POST /books` — Create a new book  
  Example body:
  ```json
  {
    "title": "Awsome people",
    "author": "B.Wahib"
  }
  ```

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.
