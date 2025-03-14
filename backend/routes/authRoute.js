import express from "express";
import { User } from "../models/userModel.js";
import verifyJWT from '../verifyJWT.js'
import { upload } from "../multer.js";
import { uploadCloudinary } from "../cloudinary.js";
const router = express.Router();

//sign up new User (As reader);
router.post("/signup", upload.fields([{name: 'avatar', maxCount: 1}]), async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userOld = await User.findOne({ email: email });
        if (userOld) {
            return res.status(400).json({ message: "User already exists" });
        }

        let avatar = null;
        if (req.files?.avatar && Array.isArray(req.files.avatar) && req.files.avatar[0]) {
            try {
                const avatarUploadResult = await uploadCloudinary(req.files.avatar[0].path);
                if (!avatarUploadResult?.url) {
                    return res.status(500).json({ message: "Failed to upload avatar." });
                }
                avatar = avatarUploadResult.url;
            } catch (uploadError) {
                console.error("Avatar Upload Error:", uploadError);
                return res.status(500).json({ message: "Error uploading avatar." });
            }
        }

        const user = new User({
            name,
            email,
            password,
            isAdmin,
            avatar
        });

        const savedUser = await user.save();
        console.log(savedUser);

        if (!savedUser) {
            return res.status(500).json({ message: "Something went wrong during user creation" });
        }

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Server error" });
    }
});


router.post("/login",async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "all fields are reqired" });
    }
    let user =await User.findOne({email});
    if (!user) {
        res.status(404).json({ error: "user not found" });
    }
    const validPassword = await user.isPasswordCorrect(password);
    if (validPassword) {
        const accessToken = await user.generateAccessToken();
        user = await User.findById(user._id).select("-password");
        res.status(200).
        cookie("accessToken", accessToken, { httpOnly: true, secure: true }).
        json({message:"Login Successfully",user});
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
