# Story Application

Full-stack application with separate backend and frontend folders.

## Project Structure

```
Story-V1/
├── backend/          # Express.js API server (port 5000)
├── frontend/         # Next.js application (port 3000)
└── README.md
```

## Quick Start

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:
```
DATABASE_URL="postgresql://user:password@localhost:5432/story_db?schema=public"
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

Set up database:
```bash
npm run db:setup
```

Start backend:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### 2. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## Development

- Backend: `cd backend && npm start` (runs on port 5000)
- Frontend: `cd frontend && npm run dev` (runs on port 3000)

Make sure both servers are running for the application to work properly.
