import mongoose from "mongoose";
import 'dotenv/config'

export default async function connectDb() {
    try {
        let conn = await mongoose.connect(process.env.DB as string)
        console.log(conn.connection.readyState, 'successfully connected')
    } catch (error) {
        console.log('encountered runtime error', error)
        process.exit(1)
    }
}
