import cron from 'node-cron'
import { PrismaClient } from '@prisma/client'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv')
  dotenv.config()
}

const task = cron.schedule(
  process.env.CRON_TIME.toString(),
  () => {
    const currTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
    })
    const st = performance.now()
    console.log(`[server] Scheduled jobs started at ${currTime}`)
    const et = performance.now()
    console.log(`[server] All jobs competed in ${(et - st).toFixed(3)}ms`)
  },
  {
    scheduled: false,
    timezone: 'America/Toronto',
  }
)

if (cron.validate(process.env.CRON_TIME)) {
  console.log(`[server] Online at ${currTime}`)
  console.log(`[server] All server time is 'America/Toronto'`)
  task.start()
} else console.log(`[server] Invalid schedule string`)
