import express from 'express';
import { Book } from '../models/bookModel.js'
const router = express.Router();

router.post('/new', async (req,res)=>{
    try {
        const {bookName,bookAuthorName,publishedYear,bookImage} = req.body;
        if(!bookName || !bookAuthorName|| !publishedYear){
            return res.status(400).json({error:'Please fill all the fields'});
        }
        const book = new Book({
            bookName,
            bookAuthorName,
            publishedYear,
            bookImage
        })
        await book.save()
        res.status(201).json({
            name:book.bookName,
            authorName:book.bookAuthorName,
            publishedYear:book.publishedYear,
            bookImage:book.bookImage
        })
    } catch (error) {
        console.log('error in adding book',error);   
    }
})

router.get('/all',(req,res)=>{
    
})

export default router;