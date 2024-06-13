import express from 'express'
import mongoose from "mongoose";
import authRouter from './routes/auth.js'
import clientRoutes from './routes/clients.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const MONGODB = process.env.MONGO_URI

app.use(cors())

app.use(express.json())
app.use('/auth',authRouter)
app.use('/clients',clientRoutes)

async function startApp() {
    try {
        await mongoose.connect(MONGODB)
        app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}

startApp()