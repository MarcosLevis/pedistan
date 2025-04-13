import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes"
import { connectDB } from "./database/postgres" //esto es del hindu

const PORT = process.env.PORT || 3002

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

connectDB()//esto es del hindu

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))

