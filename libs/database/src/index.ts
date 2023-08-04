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

export const migrations = async (db: Knex) => {
    // TODO: create table if not exists
}

export const insertBlock = async (db: Knex, block: Block): Promise<Block> => {
    throw new Error("not implemented")
}

export const getBlock = async (db: Knex, blockNumber: number): Promise<Block> => {
    throw new Error("not implemented")
}

export const getBlocks = async (db: Knex, count = 10): Promise<Block[]> => {
    return []
}
