import dotenv from "dotenv"
import express from 'express'
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from './db/connectMongoDB.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 6000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/auth", authRoutes)
app.get("/", (req, res) => {
    res.send("Server is running")
})
// app.get("/api/auth/signup", (req, res) => {
//     res.send("Server is running ");
// })
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectMongoDB()
})