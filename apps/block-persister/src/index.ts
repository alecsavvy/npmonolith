import { readConfig } from "@monolith/config";
import { insertBlock, instantiateDb, migrations } from "@monolith/database"
import { ethers } from "ethers";

export const main = async () => {
    const { rpcUrl, databaseUrl } = readConfig()
    console.log(`persister starting up`)
    const web3 = new ethers.providers.JsonRpcProvider(rpcUrl);
    const db = instantiateDb(databaseUrl)
    console.log(`connected to web3 and db`)
    await migrations(db)
    console.log('ran db migrations')
    while (true) {
        try {
            const blockNumber = await web3.getBlockNumber()
            const { hash, number } = await web3.getBlock(blockNumber)
            console.log(`retrieved new block ${number}`)
            await insertBlock(db, { blockNumber: number, blockHash: hash })
            console.log(`persisted new block ${number}`)
            await delay({ seconds: 2 })
        } catch (e) {
            console.error(e)
        }
    }
}

const delay = async ({ seconds }: { seconds: number }) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

main().catch(console.error)
