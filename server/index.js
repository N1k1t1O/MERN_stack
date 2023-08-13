const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes.js")
const attractionsRouter = require("./routes/attractions.routes.js")
const corsMiddleware = require('./middleware/cors.middleware.js')

const app = express()
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/attractions", attractionsRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbURL"))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {

    }
}

start()