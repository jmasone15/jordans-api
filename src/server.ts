// Dependencies
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

// Initilization
const app: Express = express();
const PORT: string = process.env.PORT || "3001";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response) => {
    res.send("Express and TypeScript Server");
});

app.listen(PORT, async () => {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`MongoDB Connected: ${dbConnect.connection.host}`);
    console.log(`⚡️[server]: Server Listening at: http://localhost:${PORT}`);
});
