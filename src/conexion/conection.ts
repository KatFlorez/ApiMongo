import { Db, MongoClient } from "mongodb"
import { mongoConfig } from "./config"

export default function getConnection(): {db: Db, client: MongoClient}{
    const client = new MongoClient(mongoConfig.server, mongoConfig.options);
    const db = client.db(mongoConfig.dbName);
    return {db,client};
}