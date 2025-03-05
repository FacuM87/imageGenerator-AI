import express, { json, urlencoded } from "express";
import hfRouter from "./routes/hf.routes.js"
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }))

app.listen(process.env.PORT, () => {
    console.log("Server running in port:",process.env.PORT);   
})

app.use("/api/hf", hfRouter)