import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        photos: {
          where: { isPrimary: true },
          take: 1,
        },
        preferences: true,
      },
      take: 50,
    })

    res.json(users)
  } catch (error) {
    console.error('Failed to fetch users:', error)
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { email, name, username } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
      },
    })

    res.status(201).json(user)
  } catch (error) {
    console.error('Failed to create user:', error)
    res.status(500).json({ error: 'Failed to create user' })
  }
})

export default router

