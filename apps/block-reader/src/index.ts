import { readConfig } from '@monolith/config'
import { getBlocks, instantiateDb } from '@monolith/database'
import Fastify from 'fastify'

const main = async () => {
    // init app things
    const fastify = Fastify({
        logger: true
    })
    
    console.log("initializing")
    const { databaseUrl } = readConfig()
    const db = instantiateDb(databaseUrl)
    console.log("got config and db")
    
    // Declare a route
    fastify.get('/', async (_req, _rep) => {
        return { hello: 'world' }
    })
    
    fastify.get('/blocks', async (_req, _rep) => {
        return await getBlocks(db, 10)
        })
    
    await fastify.listen({ port: 3000 })
}

main().catch(console.error)
