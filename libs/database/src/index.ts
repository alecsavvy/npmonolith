import { Knex, knex } from "knex"

export const instantiateDb = (url: string): Knex => {
    return knex({
        client: "pg",
        connection: url
    })
}

export type Block = {
    blockNumber: number,
    blockHash: string,
}

export enum Tables {
    Blocks = "blocks",
}

export const migrations = async (db: Knex) => {
    await db.schema.createTable(Tables.Blocks, function (table) {
        table.increments();
        table.integer('blockNumber');
        table.string('blockHash');
      })
}

export const insertBlock = async (db: Knex, block: Block): Promise<Block> => {
    await db(Tables.Blocks).insert({ ...block })
    return block
}

export const getBlock = async (db: Knex, blockNumber: number): Promise<Block> => {
    return await db<Block>(Tables.Blocks).select('*').where('blockNumber', '=', blockNumber).first()
}

export const getBlocks = async (db: Knex, count = 10): Promise<Block[]> => {
    return await db<Block>(Tables.Blocks).select('*').orderBy('blockNumber', 'desc').limit(count)
}
