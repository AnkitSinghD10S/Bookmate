import express from "express";
import { Book } from "../models/bookModel.js";
import { upload } from "../multer.js";
import { uploadCloudinary } from "../cloudinary.js";
import verifyJWT from "../verifyJWT.js";

const router = express.Router();

router.post("/new", upload.fields([{ name: "bookLink", maxCount: 1 }, { name: "bookImage", maxCount: 1 }]), verifyJWT, async (req, res) => {
    try {
        let user = req.user;
        if (!user.isAdmin) {
            return res.status(401).json({message:"Unauthorized: Only admins can upload books"});
        }

        const { bookName, bookAuthorName, publishedYear } = req.body;
        if (!bookName || !bookAuthorName || !publishedYear) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }
        let bookImage;
        if (req.files?.bookImage) {
            const ImageUploadResult = await uploadCloudinary(req.files.bookImage[0].path);
            if (!ImageUploadResult?.secure_url) {
                return res.status(500).json({ message: "Failed to upload book image." });
            }
            bookImage = ImageUploadResult.secure_url;
        } else {
            return res.status(400).json({ message: "Please provide a book image." });
        }
        let bookLink;
        if (req.files?.bookLink) {
            const bookUploadResult = await uploadCloudinary(req.files.bookLink[0].path);
            if (!bookUploadResult?.secure_url) {
                return res.status(500).json({ message: "Failed to upload book file." });
            }
            bookLink = bookUploadResult.secure_url;
        } else {
            return res.status(400).json({ message: "Please provide a book file." });
        }
        const book = new Book({
            bookName,
            bookAuthorName,
            publishedYear,
            User: user._id,
            bookImage,
            bookLink
        });

        await book.save();
        await user.uploadedBook.push(book);
        await user.save();
        return res.status(201).json({
            message: "Book uploaded successfully",
            book,
            user
        });

    } catch (error) {
        console.error("Error in adding book:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.patch("/update/:id", upload.fields([{ name: "bookImage", maxCount: 1 }, { name: "bookLink", maxCount: 1 }]),verifyJWT, async (req, res) => {
        try {
            const bookId = req.params.id;
            const { bookName, bookAuthorName, publishedYear } = req.body;

            if (!bookName || !bookAuthorName || !publishedYear) {
                return res.status(400).json({ error: "Please fill all the fields" });
            }

            const book = await Book.findById(bookId);
            if (!book) {
                return res.status(404).json({ error: "Book not found" });
            }

            if (req.files?.bookImage) {
                const ImageUploadResult = await uploadCloudinary(req.files.bookImage[0].path);
                if (!ImageUploadResult?.secure_url) {
                    return res.status(500).json({ message: "Failed to upload book image." });
                }
                book.bookImage = ImageUploadResult.secure_url;
            }

            if (req.files?.bookLink) {
                const bookUploadResult = await uploadCloudinary(req.files.bookLink[0].path);
                if (!bookUploadResult?.secure_url) {
                    return res.status(500).json({ message: "Failed to upload book file." });
                }
                book.bookLink = bookUploadResult.secure_url;
            }
            book.bookName = bookName;
            book.bookAuthorName = bookAuthorName;
            book.publishedYear = publishedYear;
            await book.save();
            book = await Book.findById(book._id);
            return res.status(200).json({
                message: "Book updated successfully",
                book
            });

        } catch (error) {
            console.error("Error in updating the book:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
);


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
        const books = await Book.find({});
        if (!books) {
            res.status(404).json({ error: "no books found" });
        }

        res.status(200).json(books);

    } catch (error) {
        console.log("error in getting the books", error);
    }
})

export default router;
