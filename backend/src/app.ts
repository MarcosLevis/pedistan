import express from "express"
import { sequelize } from "./database/postgres"
import "dotenv/config"
import cors from "cors"
import { router } from "./routes"
import { connectDB } from "./database/postgres" //esto es del hindu

const PORT = process.env.PORT || 3002

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

//esto es para testear que la conexion este hecha
connectDB()
//esto sincrniza las tablas con los modelos,  This creates the tables if it doesn't exist (and does nothing if it already exists):
sequelize.sync()
//este te pisa todo no le cabe una:
//sequelize.sync({force: true}) 

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))

