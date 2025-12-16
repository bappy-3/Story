# Backend Server

Express.js backend API server running on port 5000.

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

Start the development server:
```bash
npm run dev
```

Or start the production server:
```bash
npm run build
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

