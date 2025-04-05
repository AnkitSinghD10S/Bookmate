import express from "express";
import { Book } from "../models/bookModel.js";
import { upload } from "../multer.js";
import { uploadCloudinary } from "../cloudinary.js";
import { User } from "../models/userModel.js";
import verifyJWT from "../verifyJWT.js";

const router = express.Router();

router.post("/new", upload.fields([{ name: "bookLink", maxCount: 1 }, { name: "bookImage", maxCount: 1 }]), verifyJWT, async (req, res) => {
    try {
        let user = req.user;
        if (user.role === 'buyer') {
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

router.patch("/update/:id", upload.fields([{ name: "bookImage", maxCount: 1 }, { name: "bookLink", maxCount: 1 },]),verifyJWT,async (req, res) => {
      try {
        const user = req.user;
        if (!user.isBuyer) {
          return res.status(401).json({ message: "Unauthorized: Only admins can update books" });
        }
  
        const bookId = req.params.id;
        const { bookName, bookAuthorName, publishedYear } = req.body;
  
        let updateFields = {};
  
        if (bookName) updateFields.bookName = bookName;
        if (bookAuthorName) updateFields.bookAuthorName = bookAuthorName;
        if (publishedYear) updateFields.publishedYear = publishedYear;
  
        if (req.files?.bookImage) {
          const ImageUploadResult = await uploadCloudinary(req.files.bookImage[0].path);
          if (!ImageUploadResult?.secure_url) {
            return res.status(500).json({ message: "Failed to upload book image." });
          }
          updateFields.bookImage = ImageUploadResult.secure_url;
        }
  
        if (req.files?.bookLink) {
          const bookUploadResult = await uploadCloudinary(req.files.bookLink[0].path);
          if (!bookUploadResult?.secure_url) {
            return res.status(500).json({ message: "Failed to upload book file." });
          }
          updateFields.bookLink = bookUploadResult.secure_url;
        }
  
        const book = await Book.findByIdAndUpdate(
            bookId,
            { $set: updateFields },
            { new: true, runValidators: true }
          );
          
  
        if (!book) {
          return res.status(404).json({ error: "Book not found" });
        }
  
        return res.status(200).json({ message: "Book updated successfully", book });
      } catch (error) {
        console.error("Error updating the book:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  );
  
router.delete("/delete/:id", verifyJWT, async (req, res) => {
    try {
        if (!req.user.isBuyer) {
            return res.status(403).json({ message: "Unauthorized: Only admins can delete books" });
        }

        const bookId = req.params.id;
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        await User.findByIdAndUpdate(book.User, {
            $pull: { uploadedBook: bookId }
        });
        const deletedBook = await Book.findByIdAndDelete(bookId);

        return res.status(200).json({ message: "Book deleted successfully", deletedBook });

    } catch (error) {
        console.error("Error deleting the book:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({}).populate('User', 'name email avatar');
        if (!books) {
            return res.status(404).json({ error: "no books found" });
        }

        return res.status(200).json(books)

    } catch (error) {
        console.log("error in getting the books", error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

router.patch('/savedBook/:id', verifyJWT, async (req, res) => {
    try {
        const userId = req.user._id; 
        const bookId = req.params.id;
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        await User.findByIdAndUpdate(
            userId,
            { $addToSet: { savedBook: book._id } },  
            { new: true }
        );
        const updatedUser = await User.findById(userId).populate("savedBook");

        return res.status(200).json({ message: "Book Saved Successfully", user: updatedUser });

    } catch (error) {
        console.error("Error saving the book:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.patch('/removedSavedBook/:id', verifyJWT, async (req, res) => {
    try {
        const user = req.user;
        const bookId  = req.params.id;

        if (!bookId) {
            return res.status(400).json({ message: "Book ID is required" });
        }
        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            { $pull: { savedBook: bookId } },
            { new: true } 
        ).populate({
            path: "savedBook",
            select: "bookName bookAuthorName publishedYear bookImage bookLink"
        });

        return res.status(200).json({ message: "Book removed from saved list", updatedUser });

    } catch (error) {
        console.error("Error removing saved book:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});



export default router;
