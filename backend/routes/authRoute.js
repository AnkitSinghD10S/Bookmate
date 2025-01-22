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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const user = new User({
            name,
            email,
            password: hashedPassword,
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
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400).json({error:"all fields are reqired"});
    } 
    const user= User.findOne({email:email});
    if(!user){
        res.status(404).json({error:"user not found"});
    }

    const validPassword=bcrypt.compare(password,user.password);

    if(!validPassword){
        res.status(400).json({error:"input details does not match"});
    }else{
        res.status(200).json({message:"login successfull"});
    }

});

router.get("/logout", (req, res) => {});

export default router;
