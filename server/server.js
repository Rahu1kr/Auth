import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { connectDB } from './utils/db.js';
import authRoute from './routes/AuthRoute.js';

dotenv.config();

const app = express();
app.use(express.json());

const corsOrigin = {
    origin: [`http://localhost:5173`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(cors(corsOrigin));

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`)
    });
});


app.use(cookieParser());
app.use('/', authRoute)