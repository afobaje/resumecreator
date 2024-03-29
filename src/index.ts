import express from 'express'
import cors from 'cors'
import router from './Routes/Route';
import 'dotenv/config'
import connectDb from './config/db';

const app = express();
const port = process.env.PORT || 5000;
const { urlencoded } = express;
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: false }))
connectDb();
app.use('/api', router)
app.listen(port, () => console.log(`port running on ${port}`))