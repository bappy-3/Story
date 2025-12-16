import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
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
    const user = await prisma.user.create({
      data: {},
    })

    res.status(201).json(user)
  } catch (error) {
    console.error('Failed to create user:', error)
    res.status(500).json({ error: 'Failed to create user' })
  }
})

export default router

