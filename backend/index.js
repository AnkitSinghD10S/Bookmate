import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js';
import bookRouter from './routes/bookRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: './.env',
});
const app= express();
const MONGOOSE = process.env.MONGOOSE;
const PORT = process.env.PORT


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
const corsOptions = {
    origin: process.env.CORS || 'http://localhost:5173',
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.get('/',(req,res)=>{
    res.send("Welcome to Bookmate")
})

app.use('/api/auth', authRouter)
app.use('/api/book',bookRouter)

try {
    mongoose.connect(`${MONGOOSE}/BookMate`).then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });
} catch (error) {
    console.log('error has occured while connecting the database',error);
}

