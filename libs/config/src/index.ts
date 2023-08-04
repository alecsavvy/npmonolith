import dotenv from "dotenv"

export type Config = {
    databaseUrl: string,
}

export const readConfig = (): Config => {
    dotenv.config()
    const databaseUrl = process.env.databaseUrl
    if (databaseUrl === undefined) throw new Error("databaseUrl undefined")
    return { databaseUrl }
}
