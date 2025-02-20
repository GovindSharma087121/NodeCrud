import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dontenv from "dotenv";
import route from "./routes/userRoutes.js";

const app = express(); // initialize express app

app.use(bodyParser.json()); //parsing the json request
dontenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database conneccted successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log("error", error);
})

app.use("/api/user",route);