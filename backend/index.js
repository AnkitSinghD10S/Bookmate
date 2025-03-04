import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js';
import bookRouter from './routes/bookRoute.js';
import cors from 'cors';

dotenv.config();
const app= express();
const MONGOOSE = process.env.MONGOOSE;
const PORT = process.env.PORT||5000;


app.use(express.json());

app.use(cors());

app.use('/api/auth', authRouter)

app.use('/api/book',bookRouter)

try {
    mongoose.connect(MONGOOSE).then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });
} catch (error) {
    console.log('error has occured while connecting the database',error);
}

