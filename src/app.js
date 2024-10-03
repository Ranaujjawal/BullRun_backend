import express from "express"
import cors from "cors"
import CookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: '*',
    Credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit:"16kb"}))
app.use(express.static("public"))
app.use(CookieParser())


export {app}