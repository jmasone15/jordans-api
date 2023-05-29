// Dependencies
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import wordRoutes from "./routes/wordRoutes";

dotenv.config();

// Initilization
const app: Express = express();
const PORT: string = process.env.PORT || "3001";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/word", wordRoutes);

app.listen(PORT, async () => {
    try {
        const dbConnect = await mongoose.connect(process.env.MONGODB_URI as string);

        console.log(`🔋 [database]: MongoDB Connected: ${dbConnect.connection.host}`);
        console.log(`⚡️ [server]: Server Listening at: http://localhost:${PORT}`);
    } catch (error) {
        console.error(error);
    }
});
