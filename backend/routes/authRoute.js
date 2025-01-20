import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 8) {
            res.status(400).json({
                message: "password length should be  8 or greater",
            });
        }

        const user = new User({
            name,
            email,
            password,
        });
        await user.save();
        res.status(201).json({ 
            name: user.name,
            email: user.email 
        });


    } catch (error) {
        console.log("error in signup", error);
    }
});

router.post("/login", (req, res) => {

    

});

router.get("/logout", (req, res) => {});

export default router;
