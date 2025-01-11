import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app= express();
const MONGOOSE = process.env.MONGOOSE;
const PORT = process.env.PORT||5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
mongoose.connect(MONGOOSE).then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log('Server has started');
    });
});

