import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();



router.post("/new", async (req, res) => {
    try {
        const { bookName, bookAuthorName, publishedYear, bookImage } = req.body;
        if (!bookName || !bookAuthorName || !publishedYear) {
            return res
            .status(400)
            .json({ error: "Please fill all the fields" });
        }
        const book = new Book({
            bookName,
            bookAuthorName,
            publishedYear,
            bookImage,
        });
        await book.save();
        res.status(201).json({
            name: book.bookName,
            authorName: book.bookAuthorName,
            publishedYear: book.publishedYear,
            bookImage: book.bookImage,
        });
    } catch (error) {
        console.log("error in adding book", error);
    }
});

router.post("/update/:bookname", async (req, res) => {
    try {
        const { bookName, bookAuthorName, publishedYear, bookImage } = req.body;
        if (!bookName || !bookAuthorName || !publishedYear) {
            return res
            .status(400)
            .json({ error: "Please fill all the fields" });
        }
        const book = await Book.findOne({ bookName: req.params.bookname });
        
        if (book) {
            book.bookName = bookName;
            book.bookAuthorName = bookAuthorName;
            book.publishedYear = publishedYear;
            book.bookImage = bookImage;
            await book.save();
            
            res.status(200).json({
                name: book.bookName,
                authorName: book.bookAuthorName,
                publishedYear: book.publishedYear,
                bookImage: book.bookImage,
            });
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        console.log("error in updating the book", error);
    }
});

router.delete("/delete/:bookname", async (req, res) => {
    try {
        const name = req.params.bookname;
        const book = await Book.findOne({ bookName: name });
        if (book) {
            await book.deleteOne();
            res.status(200).json({ book });
        } else {
            res.status(400).json({ error: "Book not found" });
        }
    } catch (error) {
        console.log("error in deleting the book", error);
    }
});

router.get("/:bookname", async (req, res) => {
    try {
        const name = req.params.bookname;
        const book = await Book.findOne({ bookName: name });
        if (book) {
            res.status(200).json({ book });
        } else {
            res.status(404).json({ error: "book not found" });
        }   
    } catch (error) {
        console.log("error in getting the book", error);
    }
});

router.get("/", async (req, res) => {
    try {
        const  books = await Book.find({});
        if(!books){
            res.status(404).json({error:"no books found"});
        }
        res.status(200).json(books);
        
    } catch (error) {
        console.log("error in getting the books",error);
    }
})

export default router;
