import { readConfig } from '@monolith/config'
import { getBlocks, instantiateDb } from '@monolith/database'
import Fastify from 'fastify'

// init app things
const fastify = Fastify({
  logger: true
})

const { databaseUrl } = readConfig()
const db = instantiateDb(databaseUrl)

// Declare a route
fastify.get('/', async (_req, _rep) => {
  return { hello: 'world' }
})

fastify.get('/blocks', async (_req, _rep) => {
    return await getBlocks(db, 10)
  })

fastify.listen({ port: 3000 }).catch(console.error)
