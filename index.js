import express from 'express';
import router from './routes/router.js';
import dotenv from 'dotenv';
import dbConnect from './dbConnect.js';

dotenv.config()
const app = express()
const port = process.env.PORT

dbConnect()
app.use(express.json())
app.use(router)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
