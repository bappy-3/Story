import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <Badge variant="secondary" className="px-3 py-1">
            Next.js 14 + TypeScript
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Full-Stack Monorepo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A modern full-stack application built with Next.js 14, TypeScript, TailwindCSS, 
            shadcn/ui, Zustand, and Prisma ORM with PostgreSQL.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>🚀 Ready to Build</CardTitle>
              <CardDescription>
                Complete development environment setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next.js 14 with App Router</li>
                <li>• TypeScript configuration</li>
                <li>• ESLint + Prettier</li>
                <li>• TailwindCSS + shadcn/ui</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💾 Database</CardTitle>
              <CardDescription>
                PostgreSQL with Prisma ORM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User management</li>
                <li>• Profile & preferences</li>
                <li>• Photo handling</li>
                <li>• Match & messaging system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Modern UI</CardTitle>
              <CardDescription>
                Beautiful, responsive interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• shadcn/ui components</li>
                <li>• Dark mode support</li>
                <li>• Responsive design</li>
                <li>• Tailwind CSS</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button size="lg" asChild>
            <a href="/api/health">API Health Check</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/dashboard">View Dashboard</a>
          </Button>
        </div>
      </div>
    </main>
  )
}