# Next.js 14 Full-Stack Monorepo

A modern full-stack application built with Next.js 14, TypeScript, TailwindCSS, shadcn/ui, Zustand, and Prisma ORM with PostgreSQL.

## 🚀 Features

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **TailwindCSS** + **shadcn/ui** for beautiful, responsive UI
- **Prisma ORM** with PostgreSQL database
- **Zustand** for lightweight client state management
- **NextAuth.js** for authentication
- **ESLint + Prettier** for code quality and formatting
- **Comprehensive database schema** with User, Profile, Photo, Preference, Match, and Message models
- **RESTful API routes** for backend functionality
- **Dark mode support**

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, shadcn/ui components
- **State Management**: Zustand
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Code Quality**: ESLint, Prettier
- **Development**: TypeScript, npm scripts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **PostgreSQL** (v13 or higher)
- **Git**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next14-monorepo-fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your actual values:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/next14_monorepo?schema=public"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Generate Prisma client**
   ```bash
   npm run db:generate
   ```

5. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

6. **Seed the database (optional)**
   ```bash
   npm run db:seed
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 🗃 Database Operations

### Running Migrations
```bash
# Create and apply new migration
npm run db:migrate

# Apply migrations in production
npm run db:migrate:deploy

# Reset database (WARNING: This will delete all data)
npm run db:reset

# Open Prisma Studio (database GUI)
npm run db:studio
```

### Database Schema
The application includes a comprehensive schema with the following entities:

- **User**: Core user account information
- **Profile**: Extended user profile data (bio, age, location, etc.)
- **Photo**: User photos with metadata
- **Preference**: User dating preferences
- **Match**: User matching system
- **Message**: Messaging between matched users
- **Account/Session**: NextAuth.js authentication tables

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── api/                  # API routes
│   │   ├── health/           # Health check endpoint
│   │   └── users/            # User management endpoints
│   ├── dashboard/            # Dashboard page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   └── ui/                   # shadcn/ui components
├── lib/                      # Utility libraries
│   ├── prisma.ts             # Prisma client configuration
│   └── utils.ts              # Utility functions
├── prisma/                   # Database schema and migrations
│   ├── schema.prisma         # Database schema
│   └── seed.ts               # Database seeding script
├── stores/                   # Zustand stores
│   └── authStore.ts          # Authentication store
├── types/                    # TypeScript type definitions
├── utils/                    # Utility functions
└── public/                   # Static assets
```

## 🔨 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run database migrations |
| `npm run db:migrate:deploy` | Deploy migrations in production |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:reset` | Reset database |
| `npm run db:seed` | Seed database with sample data |
| `npm run db:setup` | Complete database setup (generate, push, seed) |
| `npm run ci` | Run all CI checks (type-check, lint, format) |

## 🌐 API Endpoints

### Health Check
- `GET /api/health` - Application health status

### Users
- `GET /api/users` - Get all users with profiles and preferences
- `POST /api/users` - Create a new user

### Matches
- `GET /api/matches` - Get user matches
- `POST /api/matches` - Create a new match
- `PATCH /api/matches/[id]` - Update match status

### Messages
- `GET /api/messages` - Get messages for a match
- `POST /api/messages` - Send a new message

## 🎨 UI Components

The application uses **shadcn/ui** components built on top of Radix UI and styled with TailwindCSS. Available components include:

- Button
- Card
- Badge
- Dialog
- Input
- Label
- Select
- Tabs
- Toast
- And more...

## 🔐 Authentication

The application is configured with NextAuth.js for authentication. To enable authentication:

1. Configure OAuth providers in `.env`
2. Set up the NextAuth.js configuration
3. Use the authentication components in your pages

## 🧪 Development Workflow

1. **Start development**: `npm run dev`
2. **Make changes** to your code
3. **Check types**: `npm run type-check`
4. **Lint code**: `npm run lint`
5. **Format code**: `npm run format`
6. **Test database operations**: `npm run db:studio`

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in your production environment:

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- Any OAuth provider credentials

### Database Migration
Run migrations in production:
```bash
npm run db:migrate:deploy
```

### Build and Start
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Check your `DATABASE_URL` in `.env`
- Verify database credentials

### Migration Issues
- Try resetting the database: `npm run db:reset`
- Ensure no other processes are using the database

### Build Issues
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📚 Additional Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)