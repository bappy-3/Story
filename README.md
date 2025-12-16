# Story Application

Full-stack application with separate backend and frontend folders.

**Technology Stack:**
- **Frontend:** Next.js 16 with React 18.3.1, TypeScript 5.3.3
- **Backend:** Express.js with Prisma ORM 5.20.0, Node.js 18+
- **UI:** TailwindCSS 3.4.1, shadcn/ui with Radix UI components
- **State Management:** Zustand 4.4.7
- **Authentication:** NextAuth.js 5.0.0-beta.20
- **Validation:** Zod 3.22.4, react-hook-form 7.52.0
- **Development Tools:** ESLint 9.0.0, Prettier 3.1.1, TypeScript-ESLint 7.0.0

## Project Structure

```
Story-V1/
├── backend/          # Express.js API server (port 5000)
├── frontend/         # Next.js 16 application (port 3000)
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
npm run dev
```

Backend will run on `http://localhost:5000`

### 2. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install --legacy-peer-deps
```

**Note:** The `--legacy-peer-deps` flag is required due to peer dependency constraints between ESLint 9.0.0 and TypeScript-ESLint 7.0.0.

Create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## Available Scripts

### Frontend (Next.js 16)
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run ci` - Run all CI checks (type-check, lint, format:check)

### Backend (Express.js)
- `npm run dev` - Start development server with tsx watch
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Create a database migration
- `npm run db:seed` - Seed database with sample data
- `npm run db:setup` - Complete setup (generate, push, seed)
- `npm run db:studio` - Open Prisma Studio

## Development

- Backend: `cd backend && npm run dev` (runs on port 5000)
- Frontend: `cd frontend && npm run dev` (runs on port 3000)

Make sure both servers are running for the application to work properly.

## Upgrade Notes

This project has been upgraded to Next.js 16 with the following changes:
- Removed experimental `appDir` configuration (now stable in Next.js 16)
- Updated TypeScript configuration to use `jsx: "react-jsx"`
- Updated ESLint and TypeScript-ESLint to versions compatible with ESLint 9.0.0
- Updated all dependencies to latest compatible versions
- Turbopack enabled by default in development mode
