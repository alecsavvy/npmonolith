export type Config = {
    databaseUrl: string,
    rpcUrl: string,
}

export const readConfig = (): Config => {
    const databaseUrl = process.env.databaseUrl
    const rpcUrl = process.env.rpcUrl
    if (databaseUrl === undefined) throw new Error("databaseUrl undefined")
    if (rpcUrl === undefined) throw new Error("rpcUrl undefined")
    return { databaseUrl, rpcUrl }
}
