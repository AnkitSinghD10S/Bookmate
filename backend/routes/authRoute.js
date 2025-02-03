import express from "express";
import { User } from "../models/userModel.js";
import tokenGenerator from "../utils/tokens.js";
import bcrypt from 'bcryptjs';
import verifyJWT from '../verifyJWT.js'
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
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
            tokenGenerator(user._id,res);
            await user.save();
            res.status(201).json({
                name: user.name,
                email: user.email,
            });
        }
    } catch (error) {
        console.log("error in signup", error);
    }
});

router.post("/login",async (req, res) => {
   try {
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
         json({ message: "login successfull" });
     }
   } catch (error) {
    console.error("Login Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
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

router.post('/updateDetails',verifyJWT,async(req,res)=>{
    const user = req.user;
    const {name ,email} = req.body;
    try {
        const updates = {};
        if(name & user.name !== name) updates.name = name;
        if(name & user.email !== email) updates.email = email;
        if (Object.keys(updates).length > 0) {
            await User.findByIdAndUpdate(user._id, { $set: updates });
        }
        const updatedUser = await User.findById(user._id);
        res.status(200).json({
            message: 'User details updated successfully',
            user: updatedUser,
        });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({
            message: 'Error updating user details',
            error: error.message,
        });
    }
});



export default router;
