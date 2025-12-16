# Frontend Application

Next.js 16 frontend application with React 18.3.1 running on port 3000.

## Features

- Next.js 16 with Turbopack for fast development
- React 18.3.1
- TypeScript 5.3.3
- TailwindCSS 3.4.1 with shadcn/ui components
- Zustand for state management
- NextAuth.js 5.0.0-beta.20 for authentication
- Zod for schema validation
- react-hook-form for form management

## Setup

1. Install dependencies:

```bash
npm install --legacy-peer-deps
```

**Note:** The `--legacy-peer-deps` flag is required due to peer dependency constraints between ESLint 9.0.0 and TypeScript-ESLint 7.0.0.

2. Set up environment variables:
   Create a `.env.local` file in the frontend folder:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Running

Start the development server:

```bash
npm run dev
```

The application will run on `http://localhost:3000`

Make sure the backend server is running on port 5000 before starting the frontend.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run ci` - Run all CI checks
