import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample users
  const user1 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      name: 'John Doe',
      username: 'johndoe',
      profile: {
        create: {
          bio: 'Love hiking and photography',
          age: 28,
          location: 'San Francisco, CA',
          jobTitle: 'Software Engineer',
          company: 'Tech Corp',
          education: 'Computer Science',
          interests: ['hiking', 'photography', 'travel'],
        },
      },
      preferences: {
        create: {
          minAge: 25,
          maxAge: 35,
          location: 'San Francisco, CA',
          maxDistance: 50,
          interestedIn: 'female',
        },
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      name: 'Jane Smith',
      username: 'janesmith',
      profile: {
        create: {
          bio: 'Yoga enthusiast and book lover',
          age: 26,
          location: 'San Francisco, CA',
          jobTitle: 'Marketing Manager',
          company: 'Creative Agency',
          education: 'Business Administration',
          interests: ['yoga', 'reading', 'coffee'],
        },
      },
      preferences: {
        create: {
          minAge: 27,
          maxAge: 32,
          location: 'San Francisco, CA',
          maxDistance: 30,
          interestedIn: 'male',
        },
      },
    },
  })

  // Create sample photos
  await prisma.photo.create({
    data: {
      userId: user1.id,
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      caption: 'Hiking in Yosemite',
      isPrimary: true,
      order: 1,
    },
  })

  await prisma.photo.create({
    data: {
      userId: user2.id,
      url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      caption: 'Morning yoga session',
      isPrimary: true,
      order: 1,
    },
  })

  // Create a sample match
  const match = await prisma.match.create({
    data: {
      userId1: user1.id,
      userId2: user2.id,
      status: 'ACCEPTED',
    },
  })

  // Create sample messages
  await prisma.message.create({
    data: {
      matchId: match.id,
      senderId: user1.id,
      content: 'Hey! I saw you love photography too. Have you been to any good photo spots lately?',
    },
  })

  await prisma.message.create({
    data: {
      matchId: match.id,
      senderId: user2.id,
      content: 'Hi John! Yes, I actually discovered some great spots in Golden Gate Park. Would love to show you sometime!',
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created users: ${user1.email}, ${user2.email}`)
  console.log(`Created match with messages`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })