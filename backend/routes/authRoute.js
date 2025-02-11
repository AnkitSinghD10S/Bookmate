import express from "express";
import { User } from "../models/userModel.js";
import tokenGenerator from "../utils/tokens.js";
import bcrypt from 'bcryptjs';
import verifyJWT from '../verifyJWT.js'
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name,email,password);
        
        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
        }

        const userOld = await User.findOne({email:email});
        if(userOld){
            res.status(400).json({message:"user alreay exists"});
        }

        if (password.length < 8) {
            res.status(400).json({
                message: "password length should be  8 or greater",
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        if(user){
            const accessToken= tokenGenerator(user._id,res);
            await user.save();
            res.status(200).
        cookie("accessToken", accessToken, { httpOnly: true, secure: true }).
        json({name:user.name,email:user.email,_id:user._id});
        }
    } catch (error) {
        console.log("error in signup", error);
    }
});

router.post("/login",async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "all fields are reqired" });
    }
    const user =await User.findOne({email});
    if (!user) {
        res.status(404).json({ error: "user not found" });
    }
    const validPassword = await bcrypt.compare(password, user?.password || "");
    if (validPassword) {
        const accessToken = tokenGenerator(user._id, res);
        res.status(200).
        cookie("accessToken", accessToken, { httpOnly: true, secure: true }).
        json({name:user.name,email:user.email,_id:user._id});
    } else {
        res.status(400).json({ error: "input details does not match" });
    }
});

router.get("/logout",verifyJWT, async(req, res) => {
    const user = req.user;
    if(user){
        res.status(201).
        clearCookie("accessToken").
        json({message:"User Logout Successfully"})
    }
    else{
        return res.status(402).json({message:"Something went wrong during logout User"})
    }
});

export default router;
