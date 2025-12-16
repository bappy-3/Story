# Backend Server

Express.js backend API server running on port 5000.

## Features

- Express.js for HTTP server
- Prisma ORM 5.20.0 with PostgreSQL
- TypeScript 5.3.3
- CORS enabled for frontend communication
- RESTful API design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the backend folder:
```
DATABASE_URL="postgresql://user:password@localhost:5432/story_db?schema=public"
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

3. Set up the database:
```bash
npm run db:setup
```

## Running

Start the development server (with hot reload via tsx):
```bash
npm run dev
```

Or start the production server:
```bash
npm run build
npm run start
```

The server will run on `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server with tsx watch
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Create a database migration
- `npm run db:seed` - Seed database with sample data
- `npm run db:setup` - Complete setup (generate, push, seed)
- `npm run db:studio` - Open Prisma Studio

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

